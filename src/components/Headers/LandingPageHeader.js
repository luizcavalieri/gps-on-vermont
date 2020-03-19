import React, { useEffect, createRef } from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

const LandingPageHeader = ({ title, backgroundImgName, imageClassName, contentClassName, titleClassName }) => {
  let pageHeader = createRef();
  if (!backgroundImgName) backgroundImgName = "doctor-patient-consultation.jpg";
  if(!imageClassName) imageClassName = "page-header page-header-small";
  if(!contentClassName) contentClassName="content-center";
  if(!titleClassName) titleClassName="title-landing-page"

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
      <div className={imageClassName}>
        <div
          className="page-header-image "
          style={{
            backgroundImage: "url(" + require(`../../assets/img/${backgroundImgName}`) + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className={contentClassName}>
          <Container>
            <h1 className={titleClassName}>{title}</h1>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingPageHeader;
