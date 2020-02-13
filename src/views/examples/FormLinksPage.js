import React, { useEffect } from "react";
import { Container } from "reactstrap";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";

const FormLinksPage = () => {
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
          <Container className="text-muted"></Container>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default FormLinksPage;
