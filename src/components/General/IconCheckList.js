import React from "react";
import IconCheckItem from "./IconCheckItem";

const IconCheckList = ({ list }) => {
  if (!list) return null;
  // console.log(list);
  return (
    <>
      <ul className="fa-ul ">
        {list.map((item, index) => (
          <IconCheckItem item={item} key={index} />
        ))}
      </ul>
    </>
  );
};

export default IconCheckList;
