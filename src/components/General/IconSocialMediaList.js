import React from "react";
import IconSocialMediaItem from "./IconSocialMediaItem";

const IconSocialMediaList = ({ list }) => {
  if (!list) return null;
  
  return (
    <>
      {list.map((item, index) => (
        <IconSocialMediaItem id={item.id} link={item.link} key={index} />
      ))}
    </>
  );
};

export default IconSocialMediaList;
