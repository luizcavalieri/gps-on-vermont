import React from "react";
import { Button } from "reactstrap";

const IconSocialMediaItem = ({id, link, index}) => {

  return ( 
    <>
      <Button
        className="btn-icon btn-round"
        color="info"
        href={link}
        // onClick={e => e.preventDefault()}
      >
        {(function() {
          switch (id) {
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
