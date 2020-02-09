import React from "react";
import IconCheckItem from "./IconCheckItem";

const IconCheckList = ({ list, ulClassName, liClassName, iconClassName, className:passedClasses }) => {
  if (!list) return null;
  // console.log(list);
  return (
    <>
      <ul className={ulClassName}>
        {list.map((item, index) => (
          <IconCheckItem key={index} item={item} liClassName={liClassName} iconClassName={iconClassName} className={passedClasses} />
        ))}
      </ul>
    </>
  );
};

export default IconCheckList;
