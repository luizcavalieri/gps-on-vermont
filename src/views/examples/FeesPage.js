import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";
import { Container } from "reactstrap";
import TableData from "../../components/General/TableData";
import feeContent from "../../data/fees-content";

const FeesPage = () => {
  const message = "We'd love to hear from you!";

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
      <DefaultFooter />
    </>
  );
};

export default FeesPage;
