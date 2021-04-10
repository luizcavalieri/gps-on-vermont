import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//////////just as an example of how to avoid typescript check ///@ts-ignore
import ScrollUpButton from "react-scroll-up-button";
// reactstrap components
import { Button, Col, Container, Row } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import BarButtonsLandPageHeader from "../../components/General/BarButtonsLandPageHeader";
import NewsCardsPreview from "../../components/General/NewsCardsPreview";
import OpeningHours2 from "../../components/General/OpeninHours2";
import OurTeam from "../../components/General/OurTeam";
import ServiceCardBlock from "../../components/General/ServiceCardBlock";
import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";
// core components
import HomeNavbar from "../../components/NavBars/HomeNavbar";
import newsContent from "../../data/news-content";
import staffContent from "../../data/staff-content";
import { headerScrolling } from "./commons";
// import Announcement from "../../components/General/Announcement";
import TeleHealth from "../../components/General/TeleHealth";

function LandingPage() {
  // const [firstFocus, setFirstFocus] = useState(false);
  // const [lastFocus, setLastFocus] = useState(false);

  const messageTitle = "GPs On Vermont Medical Centre";
  const bulkBilled = "gpv-bulk-billed-medical-centre.png";
  const privateBilled = "gpv-private-billed-medical-centre.png"
  // const telehealth = "gpv-telehealth.png"
  useEffect(() => {
    headerScrolling();
  });

  let seeMoreComponent = (
    <Row>
      <Col className="d-flex justify-content-center">
        <Link className="text-info" to="/news-nav/all">
          <Button color="info" className=" font-paragraph" >See More News</Button>
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
{/* <a href={`https://www.hotdoc.com.au/medical-centres/wodonga-VIC-3690/gps-on-vermont/doctors/`}
          title="Book medical appointments with Dr Carmen Padilla at GPs On Vermont Medical Centre in Wodonga VIC 3690, through HotDoc" 
          target="_blank" 
          data-hotdoc-widget="lightbox" 
          data-hotdoc-button class={` icon-calendar`}
          // data-hotdoc-button class={`large icon-calendar`}
          >Book Appointment</a> */}
        <div className="section section-about-us" >
          <Container >
          {/* ${doctorId}   ${size}*/}
          

            <BarButtonsLandPageHeader />
            <Row>
              <Col className="ml-auto mr-auto text-center align-content-center" md="12" >
                <h2 className="title text-muted ml-auto">Welcome!</h2>
                {/* <hr className="line-segment" /> */}
              </Col>
            </Row>
            <Row >
              {/* <Col sm="12" md="6" lg="3" className="ml-auto mr-auto text-center align-self-center telehealth-shield" >
                <Link style={{ fontSize: 18 }} className="text-info font-weight-bolder" to="/news/gpv-telehealth-news">
                  <img className="rounded-circle img-raised img-fluid " width={"70%"} height={"70%"} src={require(`../../assets/img/${telehealth}`)} alt={telehealth} />
                </Link>
              </Col> */}
              <Col sm="12" md="6" lg="3" className="ml-auto mr-auto text-center bulk-billed-image align-self-center" >
                <img className="img-fluid pb-2 " width={"80%"} src={require(`../../assets/img/${bulkBilled}`)} alt={bulkBilled} />
              </Col>
              <Col sm="12" lg="6" className="">
                <h5 className="description text-center">
                  At GPs on Vermont Medical Centre we are passionate about
                  providing high quality primary and preventive health care to
                  the community. Health is important, but good health is
                  optimal. Having a comprehensive health management plan and a
                  preventative approach to your health is the key to sustaining
                  a long and fulfilling life of physical, emotional and social
                  wellbeing.
                  </h5>
              </Col>
              <Col sm="12" md="6" lg="3" className="ml-auto mr-auto text-center bulk-billed-image align-self-center" >
                <img className="img-fluid pb-2 " width={"80%"} src={require(`../../assets/img/${privateBilled}`)} alt={privateBilled} />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="8" lg="6" className="ml-auto mr-auto text-center" >
                <h2 className="title text-muted">TeleHEALTH</h2>
              </Col>
            </Row>
            <Row >
              <Col sm="12" md="8" lg="8" className={"ml-auto mr-auto"}>
                <TeleHealth />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="8" lg="6" className="ml-auto mr-auto text-center" >
                <h2 className="title text-muted">Opening Hours</h2>
              </Col>
            </Row>
            <Row >
              <Col sm="12" md="8" lg="8" className={"ml-auto mr-auto"}>
                <OpeningHours2 />
              </Col>
            </Row>
            {/* <Row >
              <Col sm="12" md="6" lg="6" >
                <OpeningHours2 />
              </Col>
              <Col sm="12" md="6" lg="6" >
                <Announcement />
              </Col>
            </Row> */}
            
          </Container>
        </div>

        <div className="section section-team text-center" style={{ padding: 0 }}>
          <Container>
            <h2 className="title text-muted">Latest News</h2>
            <NewsCardsPreview news={newsContent} start={0} quantity={6} bottomComponenet={seeMoreComponent} />
          </Container>
        </div>

        <div className="section section-team text-center" style={{ padding: 0 }}>
          <Container>
            <h2 className="title text-muted">Our Services</h2>
            <div className="team">
              <ServiceCardBlock />
            </div>
          </Container>
        </div>

        <div className="section section-team text-center" style={{ padding: 0 }}>
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
