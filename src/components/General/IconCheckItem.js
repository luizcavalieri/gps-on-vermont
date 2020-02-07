import React from "react";

const IconCheckItem = ({ item }) => {
  return (
    <>
      <li >
        <span className="fa-li">
          <i className="fa fa-check-circle fa-lg"></i>
        </span>
        {item}
      </li>
    </>
  );
};

export default IconCheckItem;
