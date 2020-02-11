import React from "react";


//https://jsfiddle.net/ourcodeworld/mo8Lg1hx/
const IconNumber = ({ number, backgroundIconClassName, foregroundIconClassName }) => {
  return (
    <>
      <span className="fa-stack">
        {/* <!-- The icon that will wrap the number --> */}
        {/* <i className="fa fa-phone-square fa-lg fa-icon-card-header"></i> */}
        <i className={backgroundIconClassName}></i>
        {/* <!-- a strong element with the custom content, in this case a number --> */}
        <i className={foregroundIconClassName}>{number}</i>
      </span>
    </>
  );
};

export default IconNumber;
