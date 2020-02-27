import React from "react";
import { Button } from "reactstrap";

const IconSocialMediaItem = ({ id, mediaId, link, color, size, target, rel }) => {
  
  return (
    <>
      <Button
        className="btn-icon btn-round"
        color={color}
        size={size}
        href={link}
        id={id}
        rel={rel}
        target={target}
        // onClick={e => e.preventDefault()}
      >
        {(function() {
          switch (mediaId) {
            case "facebook":
              return <i className="fab fa-facebook-square"></i>;
            case "twitter":
              return <i className="fab fa-twitter"></i>;
            case "instagram":
              return <i className="fab fa-instagram"></i>;
            case "phone":
              return <i className="fas fa-phone fa-2x" style={{verticalAlign: -25}} ></i>;
            default:
              return null;
          }
        })()}
      </Button>
    </>
  );
};

export default IconSocialMediaItem;
