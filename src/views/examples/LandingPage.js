import React, { useEffect } from "react";

// reactstrap components
import { Container, Row, Col, Button, UncontrolledTooltip } from "reactstrap";

// core components
import HomeNavbar from "../../components/NavBars/HomeNavbar";
import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";
import { headerScrolling } from "./commons";
import newsContent from "../../data/news-content";
import News from "../../components/General/News";
import OpeningHours from "../../components/General/OpeningHours";
import IconSocialMediaItem from "../../components/General/IconSocialMediaItem";
import DarkFooter from "../../components/Footers/DarkFooter";
import BookingButton from "../../components/General/BookingButton";

function LandingPage() {
  // const [firstFocus, setFirstFocus] = useState(false);
  // const [lastFocus, setLastFocus] = useState(false);

  const messageTitle = "GPs On Vermont Medical Centre";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <HomeNavbar />

      <div className="wrapper">
        <LandingPageHeader title={messageTitle} />

        <div className="section section-about-us">
          <Container>
            <Row className="row justify-content-center">
              <Col xs="11" sm="11" md="6" lg="6" xl="3">
                <BookingButton
                  className="btn-block button-online-appointments btn-font btn-weight"
                  doctorId="https://www.hotdoc.com.au/medical-centres/wodonga-VIC-3690/gps-on-vermont/doctors"
                  size="md"
                />
              </Col>
            </Row>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Like us
              </Button>

              <IconSocialMediaItem
                id="tooltip515203352"
                mediaId="facebook"
                link=""
                color="info"
                size="lg"
              />
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on facebook
              </UncontrolledTooltip>
            </div>
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

        <div id="teamA" className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../../assets/img/dr-carmen.png")}
                    ></img>
                    <h4 className="title">Carmen Padilla</h4>
                    <p className="category text-info">Doctor</p>
                    <p className="description">
                      FRACGP, MBBS, Diploma of Child Heath Dr Padilla has been a
                      General Practitioner in the Wodonga area for 10 years.{" "}
                      <br /> Carmen has a special interest in women’s health,
                      child health, chronic disease management, men’s health.{" "}
                      <br />
                      Dr Padilla speaks Spanish as well as English
                      <br />
                    </p>
                  </div>
                </Col>
                <Col md="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../../assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">Annette Baumgarten</h4>
                    <p className="category text-info">Practice Manager</p>
                    <p className="description">
                      Our administration Team is managed by our Practice Manager
                      Annette Baumgarten. Annette has a vast background in
                      Business Management and has been a Practice Manager in
                      other Practices. Annette has a Diploma of Business, a
                      graduate of the Institute of company Directors Australia,
                      and has a certificate of Community engagement with the
                      Australian and International Participation
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
