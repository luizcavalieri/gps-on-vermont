import React from "react";
import IconSocialMediaItem from "./IconSocialMediaItem";

const IconSocialMediaList = ({ list, color, size }) => {
  if (!list) return null;

  return (
    <>
      {list.map((item, index) => (
        <IconSocialMediaItem key={index} mediaId={item.id} link={item.link} color={color} size={size}/>
      ))}
    </>
  );
};

export default IconSocialMediaList;
