import React from "react";
import DescriptionItem from "./DescriptionItem";

const DescriptionList = ({ list, className:passedClasses }) => {
  if (!list) return null;
  return (
    <>
      <div className="description">
        {list.map((item, index) => (
          <DescriptionItem key={index} item={item} className={passedClasses}/>
        ))}
      </div>
    </>
  );
};

export default DescriptionList;
