import React, { useEffect } from "react";
import { Container } from "reactstrap";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";
import Services from "../../components/General/Services";
import servicesContent from "../../data/services-content";

const OurServicesPage = () => {
  const ourServicesMessage = "Our Services";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <OtherPageHeader message={ourServicesMessage} />
        <div className="section text-center">
          <Container className="text-muted">
            <Services servicesData={servicesContent} />
          </Container>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default OurServicesPage;
