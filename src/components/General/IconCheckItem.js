import React from "react";

const IconCheckItem = ({ item, liClassName, iconClassName, className:passedClasses }) => {
  return (  
    <>
      <li className={passedClasses} >
        <span className={liClassName}>
          <i className={iconClassName}></i>
        </span>
        {item}
      </li>
    </>
  );
};

export default IconCheckItem;
