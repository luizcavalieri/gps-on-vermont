import React from "react";
import IconSocialMediaItem from "./IconSocialMediaItem";

const IconSocialMediaList = ({ list }) => {
  if (!list) return null;
  
  return (
    <>
      {list.map((item, index) => (
        <IconSocialMediaItem media={item} key={index} />
      ))}
    </>
  );
};

export default IconSocialMediaList;
