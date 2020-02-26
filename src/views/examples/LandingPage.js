import React, { useEffect } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import HomeNavbar from "../../components/NavBars/HomeNavbar";
import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";
import { headerScrolling } from "./commons";
import newsContent from "../../data/news-content";
import News from "../../components/General/News";
import OpeningHours from "../../components/General/OpeningHours";
import DarkFooter from "../../components/Footers/DarkFooter";
import ServiceCardBlock from "../../components/General/ServiceCardBlock";
import BarButtonsLandPageHeader from "../../components/General/BarButtonsLandPageHeader";
import staffContent from "../../data/staff-content";
import OurTeam from "../../components/General/OurTeam";
//////////just as an example of how to avoid typescript check ///@ts-ignore
import ScrollUpButton from "react-scroll-up-button";


function LandingPage() {
  // const [firstFocus, setFirstFocus] = useState(false);
  // const [lastFocus, setLastFocus] = useState(false);

  const messageTitle = "GPs On Vermont Medical Centre";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <ScrollUpButton  style={{bottom: 87}} ></ScrollUpButton>
      <HomeNavbar />

      <div className="wrapper">
        <LandingPageHeader title={messageTitle} />

        <div className="section section-about-us">
          <Container>
            <BarButtonsLandPageHeader />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  At GPs on Vermont Medical Centre we are passionate about
                  providing high quality primary and preventive health care to
                  the community. Health is important, but good health is
                  optimal. Having a comprehensive health management plan and a
                  preventative approach to your health is the key to sustaining
                  a long and fulfilling life of physical, emotional and social
                  wellbeing.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container>
            <Row>
              <Col md="12" xl="8">
                <News news={newsContent} />
              </Col>
              <Col md="12" xl="4">
                <OpeningHours />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Our Services</h2>
            <div className="team">
              <ServiceCardBlock />
            </div>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            
            <OurTeam staffData={staffContent} />
            
          </Container>
        </div>

        <DarkFooter />
      </div>
      
    </>
  );
}

export default LandingPage;
