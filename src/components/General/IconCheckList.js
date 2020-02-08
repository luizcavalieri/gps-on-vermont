import React from "react";
import IconCheckItem from "./IconCheckItem";

const IconCheckList = ({ list, className:passedClasses }) => {
  if (!list) return null;
  // console.log(list);
  return (
    <>
      <ul className="fa-ul ">
        {list.map((item, index) => (
          <IconCheckItem key={index} item={item} className={passedClasses} />
        ))}
      </ul>
    </>
  );
};

export default IconCheckList;
