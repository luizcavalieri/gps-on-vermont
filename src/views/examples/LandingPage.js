import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//////////just as an example of how to avoid typescript check ///@ts-ignore
import ScrollUpButton from "react-scroll-up-button";
// reactstrap components
import { Button, Col, Container, Row } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import BarButtonsLandPageHeader from "../../components/General/BarButtonsLandPageHeader";
import NewsCardsPreview from "../../components/General/NewsCardsPreview";
import OurTeam from "../../components/General/OurTeam";
import ServiceCardBlock from "../../components/General/ServiceCardBlock";
import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";
// core components
import HomeNavbar from "../../components/NavBars/HomeNavbar";
import newsContent from "../../data/news-content";
import staffContent from "../../data/staff-content";
import { headerScrolling } from "./commons";



function LandingPage() {
  // const [firstFocus, setFirstFocus] = useState(false);
  // const [lastFocus, setLastFocus] = useState(false);

  const messageTitle = "GPs On Vermont Medical Centre";

  useEffect(() => {
    headerScrolling();
  });

  let seeMoreComponent = (
            <Row>
                <Col className="d-flex justify-content-center">
                    <Link className="text-info" to="/news-nav/all">
                        <Button color="info" className=" font-paragraph" >See More</Button>
                    </Link>
                </Col>
            </Row>
            );

  return (
    <>
      <ScrollUpButton style={{ bottom: 87 }}></ScrollUpButton>
      <HomeNavbar />

      <div className="wrapper">
        <LandingPageHeader
          title={messageTitle}
          imageClassName={"page-header page-header-small"}
          contentClassName={"content-center"}
          titleClassName={"title-landing-page"}
        />

        <div className="section section-about-us">
          <Container>
            <BarButtonsLandPageHeader />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title text-muted">Who we are?</h2>
                {/* <hr className="line-segment" /> */}
                <h5 className="description">
                  At GPs on Vermont Medical Centre we are passionate about
                  providing high quality primary and preventive health care to
                  the community. Health is important, but good health is
                  optimal. Having a comprehensive health management plan and a
                  preventative approach to your health is the key to sustaining
                  a long and fulfilling life of physical, emotional and social
                  wellbeing.
                </h5>
                {/* <hr className="line-segment" /> */}
              </Col>

            </Row>

          </Container>
        </div>

        {/* <div>
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

        </div> */}


        <div className="section section-team text-center">
          <Container>
            <h2 className="title text-muted">Latest News</h2>
            <NewsCardsPreview news={newsContent} start={0} quantity={3} bottomComponenet={seeMoreComponent}/>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title text-muted">Our Services</h2>
            <div className="team">
              <ServiceCardBlock />
            </div>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title text-muted">Here is our team</h2>
            <OurTeam staffData={staffContent} />
          </Container>
        </div>

        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
