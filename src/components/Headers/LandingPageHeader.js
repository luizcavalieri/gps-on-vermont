import React, { useEffect, createRef } from "react";

// reactstrap components
import { Container } from "reactstrap";
import IconSocialMediaItem from "../General/IconSocialMediaItem";
import BookingButton from "../General/BookingButton";
// core components

const LandingPageHeader = ({ title }) => {
  let pageHeader = createRef();

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/bg6.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">{title}</h1>
            <div className="text-center">
              <IconSocialMediaItem id="facebook" link="https://www.facebook.com" />
              <BookingButton doctorId="https://www.hotdoc.com.au/medical-centres/wodonga-VIC-3690/gps-on-vermont/doctors" />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingPageHeader;
