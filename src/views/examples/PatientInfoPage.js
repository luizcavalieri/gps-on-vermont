import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter";
import { headerScrolling } from "./commons";
import patientsInfo from "../../data/patientsInfo-content";
import InfoCard from "../../components/General/InfoCard";
import TableData from "../../components/General/TableData";
import feeContent from "../../data/fees-content";

const PatientInfoPage = () => {
  const message = "Patients Information";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <OtherPageHeader message={message} />
        <div className="section section-team text-center">
          <Container className="text-muted">
            <Row>
              <Col>
                <InfoCard
                  record={patientsInfo[0]}
                  iconClassName="far fa-calendar-alt fa-lg"
                  headerClassName="text-left"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard
                  record={patientsInfo[1]}
                  iconClassName="fas fa-ban fa-lg"
                  headerClassName="text-left"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard
                  record={patientsInfo[2]}
                  iconClassName="fa fa-user-nurse fa-lg"
                  headerClassName="text-left"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard
                  record={patientsInfo[3]}
                  iconClassName="fa fa-notes-medical fa-lg"
                  headerClassName="text-left"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TableData feeData={feeContent} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default PatientInfoPage;
