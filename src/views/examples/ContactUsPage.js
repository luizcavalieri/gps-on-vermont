import React, { useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardHeader,
  CardFooter
} from "reactstrap";
import Iframe from "react-iframe";

import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import { headerScrolling } from "./commons";
import IconNumber from "../../components/General/IconNumber";
import BookingButton from "../../components/General/BookingButton";
import DarkFooter from "../../components/Footers/DarkFooter";

const ContactUsPage = () => {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);

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
          <Container className="text-muted">
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="6">
                <Card className="card-data ">
                  <CardHeader className="card-header">
                    <i className="fa fa-phone-square fa-lg fa-icon-card-header"></i>
                    Call Us
                  </CardHeader>
                  <CardBody className="">
                    <div className="p-2 text-info font-paragraph">Call 02 60 56 ??????</div>

                    <div className="d-flex flex-row align-items-center font-paragraph ">
                      <div className="p-2">Press</div>
                      <IconNumber
                        className="p-2"
                        number="1"
                        backgroundIconClassName="fas fa-circle fa-stack-2x fa-icon-card-header"
                        foregroundIconClassName="fas fa-stack-1x fa-inverse "
                      />
                      <div className="p-2 text-left">for Appointments</div>
                    </div>
                    <div className="d-flex flex-row align-items-center font-paragraph ">
                      <div className="p-2">Press</div>
                      <IconNumber
                        className="p-2"
                        number="2"
                        backgroundIconClassName="fas fa-circle fa-stack-2x fa-icon-card-header"
                        foregroundIconClassName="fas fa-stack-1x fa-inverse "
                      />
                      <div className="p-2 text-left">for Nurse</div>
                    </div>
                    <div className="d-flex flex-row align-items-center font-paragraph">
                      <div className="p-2 ">Press</div>
                      <IconNumber
                        className="p-2"
                        number="3"
                        backgroundIconClassName="fas fa-circle fa-stack-2x fa-icon-card-header"
                        foregroundIconClassName="fas fa-stack-1x fa-inverse "
                      />
                      <div className="p-2 text-left">for Health Professionals</div>
                    </div>
                  </CardBody>
                  <CardFooter className="card-footer-padding">
                    <div className="text-justified">
                      <i
                        className="fa fa-info-circle fa-lg "
                        style={{ marginRight: 10 }}
                      ></i>
                      If our phones are busy, please leave a message and we will
                      return your call
                    </div>
                  </CardFooter>
                </Card>
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="6" md="6">
                <Card className="card-data ">
                  <CardHeader className="card-header">
                    <i className="far fa-calendar-alt fa-lg fa-icon-card-header"></i>
                    Booking
                  </CardHeader>
                  <CardBody style={{ height: 200}}>
                    <div className="p-2 text-center  font-paragraph ">
                      Schedule yours now
                    </div>
                    <BookingButton doctorId="" size="md"/>
                  </CardBody>
                  <CardFooter className="card-footer-padding">
                    <div className="text-justified">
                      <i
                        className="fa fa-info-circle fa-lg "
                        style={{ marginRight: 10 }}
                      ></i>
                      HotDoc
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="text-center ml-auto mr-auto" lg="12" md="12">
                <Card className="card-data">
                  <CardHeader className="card-header">
                    <i className="fas fa-map-marker-alt fa-lg fa-icon-card-header"></i>
                    Come visit us
                  </CardHeader>

                  <CardBody className="card-body">
                    <CardText className="card-title-text">
                      <a
                        className="text-info"
                        href="https://goo.gl/maps/1Uy3tyShraVWj6MP7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        80 Vermont Street Wodonga VIC 3690
                      </a>
                    </CardText>
                    <Iframe
                      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.18540853074!2d146.8789333572565!3d-36.13318348009144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b2158ff61e5afa1%3A0xf97759b974ef17cf!2s80%20Vermont%20St%2C%20Wodonga%20VIC%203690!5e0!3m2!1sen!2sau!4v1580709121873!5m2!1sen!2sau"
                      width="100%"
                      height="400"
                      id="myId"
                      allowFullScreen
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="6">
                <Card className="card-data ">
                  <CardHeader className="card-header">
                    <i className="far fa-envelope fa-lg fa-icon-card-header"></i>
                    General Enquiries
                  </CardHeader>
                  <CardBody className="">
                    <div className="p-5 text-center font-paragraph ">
                      <a
                        className="text-info"
                        href="mailto: manager@gpsonvermont.com.au"
                      >
                        manager@gpsonvermont.com.au
                      </a>
                    </div>
                  </CardBody>
                  <CardFooter className="card-footer-padding">
                    <div className="text-justified">
                      <i
                        className="fa fa-info-circle fa-lg "
                        style={{ marginRight: 10 }}
                      ></i>
                      We will reply to you as soon as possible
                    </div>
                  </CardFooter>
                </Card>
              </Col>

              <Col className="text-center ml-auto mr-auto" lg="6" md="8"></Col>
            </Row>
          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
};

export default ContactUsPage;
