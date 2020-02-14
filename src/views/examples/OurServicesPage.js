import React, { useEffect } from "react";
import { Container } from "reactstrap";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import { headerScrolling } from "./commons";
import Services from "../../components/General/Services";
import servicesContent from "../../data/services-content";
import DarkFooter from "../../components/Footers/DarkFooter";

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
      <DarkFooter />
    </>
  );
};

export default OurServicesPage;
