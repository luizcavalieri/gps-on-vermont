import React from "react";
import IconSocialMediaItem from "./IconSocialMediaItem";

const IconSocialMediaList = ({ list }) => {
  if (!list) return null;

  return (
    <>
      {list.map((item, index) => (
        <IconSocialMediaItem key={index} mediaId={item.id} link={item.link} color="info" size="md"/>
      ))}
    </>
  );
};

export default IconSocialMediaList;
