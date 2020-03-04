import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import { headerScrolling } from "./commons";
import { Container } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const AfterHoursPage = () => {
  const message = "";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <LandingPageHeader
          title={message}
          imageClassName={"page-header page-header-xsmall"}
          contentClassName={"content-center-other-pages"}
          titleClassName={"title-small-header"}
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
