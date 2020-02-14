import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";

import { headerScrolling } from "./commons";
import { Container } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";

const AfterHoursPage = () => {
  const message = "ABC";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <OtherPageHeader message={message} />
        <div className="section text-center">
          <Container className=" text-muted"></Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default AfterHoursPage;
