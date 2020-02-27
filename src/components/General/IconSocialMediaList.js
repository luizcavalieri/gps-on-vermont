import React from "react";
import IconSocialMediaItem from "./IconSocialMediaItem";

const IconSocialMediaList = ({ list, color, size, target, rel }) => {
  if (!list) return null;

  return (
    <>
      {list.map((item, index) => (
        <IconSocialMediaItem key={index} mediaId={item.id} link={item.link} target={target} rel={rel} color={color} size={size}/>
      ))}
    </>
  );
};

export default IconSocialMediaList;
