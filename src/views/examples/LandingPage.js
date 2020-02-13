import React, { useEffect } from "react";

// reactstrap components
import { Container, Row, Col, Button, UncontrolledTooltip } from "reactstrap";

// core components
import HomeNavbar from "../../components/NavBars/HomeNavbar";
import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";
import newsContent from "../../data/news-content";
import News from "../../components/General/News";
import OpeningHours from "../../components/General/OpeningHours";
import IconSocialMediaItem from "../../components/General/IconSocialMediaItem";
import DarkFooter from "../../components/Footers/DarkFooter";

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
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Like us
              </Button>
              {/* <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-facebook"></i>
              </Button> */}
              <IconSocialMediaItem id="tooltip515203352" mediaId="facebook" link="" color="info" size="lg"/>
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
        {/* <div>
          <Container>
            <News news={newsContent} />
          </Container>
        </div> */}
        <div>
          <Container>
            {/* <CardDeck className="card-deck-data " > */}
            {/* <Card className="card-data ">

ml-auto mr-auto

                <CardHeader className="card-header">Booking</CardHeader>
                <CardBody className="card-body">
                  <CardText className="card-title-image">
                    <img
                      alt="..."
                      src={require("../../assets/img/hotdoc-horz.png")}
                    ></img>
                  </CardText>
                  
                  <div className="card-content ">
                    <div className="content-text ">
                      <p>80 Vermont Street Wodonga VIC 3690</p>
                    </div>
                  </div>
                </CardBody>
              </Card> */}

            <Row>
              <Col md="12" xl="8">
                <News news={newsContent} />
              </Col>
              <Col md="12" xl="4">
                <OpeningHours />
              </Col>
            </Row>
            {/* </CardDeck> */}
          </Container>
        </div>

        {/* <div>
          <Container>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  <p>
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </p>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div> */}

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
                      {/* You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site. */}
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button> */}
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
                      {/* <br />
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site. */}
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button> */}
                  </div>
                </Col>

                {/* <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../../assets/img/eva.jpg")}
                    ></img>
                    <h4 className="title">Eva Jenner</h4>
                    <p className="category text-info">Nurse</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col> */}
              </Row>
            </div>
          </Container>
        </div>
        {/* <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
