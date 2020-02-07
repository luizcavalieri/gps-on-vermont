import React from "react";
import { Button } from "reactstrap";

const IconSocialMediaItem = ({media, index}) => {

  return ( 
    <>
      <Button
        className="btn-icon btn-round"
        color="info"
        href="#pablo"
        onClick={e => e.preventDefault()}
      >
        {(function() {
          switch (media) {
            case "facebook":
              return <i className="fab fa-facebook-square"></i>;
            case "twitter":
              return <i className="fab fa-twitter"></i>;
            case "instagram":
              return <i className="fab fa-instagram"></i>;
            default:
              return null;
          }
        })()}
      </Button>
    </>
  );
};

export default IconSocialMediaItem;
