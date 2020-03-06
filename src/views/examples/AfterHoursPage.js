import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import { headerScrolling } from "./commons";
import { Container } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const AfterHoursPage = () => {
  const message = "Please contact";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <LandingPageHeader
          title={message}
          backgroundImgName={"after-hours.jpg"}
          imageClassName={"page-header page-header-small"}
          contentClassName={"content-center"}
          titleClassName={"title-landing-page"}
        />
        <div className="section text-center">
          <Container className=" text-muted">
            <h3>
              Wodonga Regional Hospital (Emergency Dept) – <b>02 6051 7111</b>
            </h3>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default AfterHoursPage;
