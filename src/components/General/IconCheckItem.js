import React from "react";

const IconCheckItem = ({ item, className:passedClasses }) => {
  return (
    <>
      <li className={passedClasses} >
        <span className="fa-li">
          <i className="fa fa-check-circle fa-lg"></i>
        </span>
        {item}
      </li>
    </>
  );
};

export default IconCheckItem;
