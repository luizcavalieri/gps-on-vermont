import React from "react";
import DescriptionItem from "./DescriptionItem";

const DescriptionList = ({ list }) => {
  if (!list) return null;
  return (
    <>
      <div className="description">
        {list.map((item, index) => (
          <DescriptionItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default DescriptionList;
