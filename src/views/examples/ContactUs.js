import React, { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  CardGroup,
  CardHeader,
  ListGroup,
  ListGroupItem,
  CardFooter
} from "reactstrap";

import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";

const ContactUs = () => {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  const contactMessage = "We'd love to hear from you!";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <OtherPageHeader message={contactMessage} />
        {/* <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </h5>
              </Col>
            </Row>
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

        <div className="section text-center">
          <Container className="text-muted">
            {/* <h2 className="title">Want to work with us?</h2> */}
            {/* <p className="description">Your project is very important to us.</p> */}
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <Card className="card-data">
                  <CardHeader className="card-header">Come visit us</CardHeader>
                  <CardBody className="card-body">
                    <CardText className="card-title-icon-text">
                      <Button
                        className="btn-icon btn-round "
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="now-ui-icons location_pin"></i>
                      </Button>
                      <div className="text">Address</div>
                    </CardText>
                    {/* <CardText className="content-bold">
                      80 Vermont Street Wodonga VIC 3690
                    </CardText> */}
                    <div className="card-content height-size-1x">
                      <div className="content-text center-in-fixed-height-1x">
                        <p>80 Vermont Street Wodonga VIC 3690</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <Card className="card-data">
                  <CardHeader className="card-header">Booking</CardHeader>
                  <CardBody className="card-body">
                    <CardText className="card-title-icon-text">
                      <Button
                        className=" btn-icon btn-round "
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="now-ui-icons ui-1_calendar-60"></i>
                      </Button>

                      <div className="text">Schedule yours now</div>
                    </CardText>
                    <div className="card-content height-size-1x">
                      <Button
                        className="btn-font btn-weight"
                        size="lg"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Online Appointments
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <Card className="card-data">
                  <CardHeader className="card-header">Call us</CardHeader>
                  <CardBody className="card-body">
                    <CardText className="card-title-icon-text">
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i class="fas fa-phone fa-icon-fix-center"></i>
                      </Button>
                      <div className="text ">Lets Talk</div>
                    </CardText>
                    {/* <div className="card-content height-size-2x"></div> */}
                    <ListGroup className="card-content height-size-2x">
                      <ListGroupItem>
                        <div className="btn-font btn-weight ">
                          Call 02 60 56 ??????
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className="text-left btn-font ">
                        <div>
                          Press <b>1</b> for <b>Appointment</b>{" "}
                        </div>
                        <div>
                          Press <b>2</b> for <b>Nurse</b>{" "}
                        </div>
                        <div>
                          Press <b>3</b> for <b>Health Professionals</b>{" "}
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </CardBody>

                  <div className="card-footer-padding">
                    If our phones are busy, please leave a message and we will
                    return your call
                  </div>
                </Card>
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <Card className="card-data">
                  <CardHeader className="card-header">
                    Drop us a line
                  </CardHeader>
                  <CardBody className="card-body">
                    <CardText className="card-title-icon-text">
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </Button>
                      <div className="text">General Enquiries</div>
                    </CardText>

                    <div className="card-content height-size-2x">
                      <div className="content-text center-in-fixed-height-2x ">
                        <a href="mailto: manager@gpsonvermont.com.au">
                          manager@gpsonvermont.com.au
                        </a>
                      </div>
                    </div>
                  </CardBody>
                  <div className="card-footer-padding">
                    we will reply to you as soon as possible
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default ContactUs;
