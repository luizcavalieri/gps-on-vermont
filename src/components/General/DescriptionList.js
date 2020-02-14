import React from "react";
import DescriptionItem from "./DescriptionItem";


const DescriptionList = ({ list, includeNewLine, className:passedClasses }) => {
  if (!list) return null;
  return (
    <>
      
      <div>
        {list.map((item, index) => (
          
          <DescriptionItem key={index} desc={item} includeNewLine={includeNewLine} className={passedClasses}/>
          
        ))}
      </div>
    </>
  );
};

export default DescriptionList;
