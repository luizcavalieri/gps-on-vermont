import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";

const OurServices = () => {
  const ourServicesMessage = "Think about a message to put here";

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
            {/* <h2 className="title">Here is our team</h2> */}
            <Row>
              <Col className="text-center ml-auto mr-auto">
                <Card className="card-data">
                  <CardHeader className="card-header">
                    Health Assessments
                  </CardHeader>
                  <CardBody className="card-body">
                    <div className="card-content height-size-3x">
                      <div className="text-justified">
                        Medicare subsides a number of Health Assessments that
                        you can take advantage of at our clinic:
                        <ul></ul>
                        <ul className="fa-ul">
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            75+ Health Assessments
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            45-49 years old Health Assessments
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            40-49 years old at risk of Type 2 Diabetes
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            ATSI adult Health Assessments
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            ATSI children Health Assessments
                          </li>
                          <li>
                            <span className="fa-li">
                              {/* <Badge pill color="primary"> */}
                              <i
                                className="fa fa-check-circle fa-lg"
                                tag="primary"
                              ></i>
                              {/* </Badge> */}
                            </span>
                            Disability Health Assessments
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="text-center ml-auto mr-auto" >
                <Card className="card-data">
                  <CardHeader className="card-header">
                    Chronic Disease Management
                  </CardHeader>
                  <CardBody className="card-body">
                    <div className="card-content height-size-3x">
                      <div className="text-justified">
                        Chronic disease Management Plans (GPMP) include
                        conditions that are ongoing such as:
                        <ul></ul>
                        <ul className="fa-ul">
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Asthma
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Cancer
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Cardiovascular disease
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Diabetes
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Musculoskeletal conditions
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Stroke
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Case conferencing
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

            </Row>

            <Row>
            <Col className="text-center ml-auto mr-auto" >
                <Card className="card-data">
                  <CardHeader className="card-header">
                    Diabetes Management
                  </CardHeader>
                  <CardBody className="card-body">
                    <div className="card-content height-size-3x">
                      <div className="text-justified">
                        Our doctors manage diabetes patients and those at high
                        risk of developing diabetes through our Chronic Disease
                        Management plans. <br />
                        GPs on Vermont provide:
                        <ul></ul>
                        <ul className="fa-ul ">
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Diet and lifstyle advice
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Medication management
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Health checks
                          </li>
                          {/* <li>
                            <span class="fa-li">
                              <i class="fa fa-check-circle fa-lg"></i>
                            </span>
                            40-49 years old at risk of Type 2 Diabetes
                          </li>
                          <li>
                            <span class="fa-li">
                              <i class="fa fa-check-circle fa-lg"></i>
                            </span>
                            ATSI adult Health Assessments
                          </li>
                          <li>
                            <span class="fa-li">
                              <i class="fa fa-check-circle fa-lg"></i>
                            </span>
                            ATSI children Health Assessments
                          </li>
                          <li>
                            <span class="fa-li">
                              <i class="fa fa-check-circle fa-lg"></i>
                            </span>
                            Disability Health Assessments
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>


              <Col className="text-center ml-auto mr-auto"  >
                <Card className="card-data">
                  <CardHeader className="card-header">
                    Heart and Lung Conditions
                  </CardHeader>
                  <CardBody className="card-body">
                    <div className="card-content height-size-3x">
                      <div className="text-justified">
                        GPs on Vermont cares for patients with:
                        <ul></ul>
                        <ul className="fa-ul ">
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Heart failure
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Hypertension
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Ischaemic heart disease
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Asthma management and action plan
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            COPD and emphysema
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
            <Col className="text-center ml-auto mr-auto" >
                <Card className="card-data">
                  <CardHeader className="card-header">
                    General Health
                  </CardHeader>
                  <CardBody className="card-body">
                    <div className="card-content height-size-3x">
                      <div className="text-justified">
                        {/* Our doctors manage diabetes patients and those at high
                        risk of developing diabetes through our Chronic Disease
                        Management plans. <br />
                        GPs on Vermont provide: */}
                        <ul></ul>
                        <ul className="fa-ul ">
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Electrocardiogram (E.C.G)
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Spirometry (Lung Function testings)
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Family Planning
                          </li>
                           <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Ceviral Screening Test (PAP) smear
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Counselling
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Children Vaccinations
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Care of aged or disabled
                          </li> 
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Heart checks 
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Skin checks, Liquid Nitrogen freezing for sunspots and warts, minor surgery
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Workcover (VIC and NSW) Comcare
                          </li> 
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            TAC (motor vehicle)
                          </li> 
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>


              <Col className="text-center ml-auto mr-auto"  >
                <Card className="card-data">
                  <CardHeader className="card-header">
                    Dept. of Veteran Affairs
                  </CardHeader>
                  <CardBody className="card-body">
                    <div className="card-content height-size-3x">
                      <div className="text-justified">
                        {/* GPs on Vermont cares for patients with: */}
                        <ul></ul>
                        <ul className="fa-ul ">
                        <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Refugee Health
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Ear Syringing
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            CVC program
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            General Medical, White and Gold card holders
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Pre-employment and general health medicals
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Weight Loss
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fa fa-check-circle fa-lg"></i>
                            </span>
                            Travel Medicine and Vaccinations
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
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

export default OurServices;
