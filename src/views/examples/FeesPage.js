import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";

import { headerScrolling } from "./commons";
import { Container } from "reactstrap";
import TableData from "../../components/General/TableData";
import feeContent from "../../data/fees-content";
import DarkFooter from "../../components/Footers/DarkFooter";

const FeesPage = () => {
  const message = "";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <OtherPageHeader message={message} />
        <div className="section text-center">
          <Container className=" text-muted">
          <TableData feeData={feeContent} />

          </Container>

          
        </div>
      </div>
      <DarkFooter />
    </>
  );
};

export default FeesPage;
