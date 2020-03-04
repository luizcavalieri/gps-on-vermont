import React, { useEffect } from "react";
import { headerScrolling } from "./commons";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import { Container } from "reactstrap";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const CareerPage = () => {
  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        {/* <Container fluid></Container> */}
        <LandingPageHeader
          backgroundImgName={"career-large.jpg"}
          imageClassName={"page-header page-header-small"}
          contentClassName={"content-center"}
          titleClassName={"title-landing-page"}
        />

        <DarkFooter />
      </div>
    </>
  );
};

export default CareerPage;
