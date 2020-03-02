import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import { headerScrolling } from "./commons";
import patientsInfo from "../../data/patientsInfo-content";
import InfoCard from "../../components/General/InfoCard";
import TableData from "../../components/General/TableData";
import feeContent from "../../data/fees-content";
import BookingButton from "../../components/General/BookingButton";
import DarkFooter from "../../components/Footers/DarkFooter";

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
                  title={patientsInfo[0].title}
                  descriptions={patientsInfo[0].descriptions}
                  items={patientsInfo[0].items}
                  iconClassName="far fa-calendar-alt fa-lg"
                  headerClassName="text-left"
                  headerRightContent={
                    <BookingButton className="btn-weight" size="sm" />
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard
                  title={patientsInfo[1].title}
                  descriptions={patientsInfo[1].descriptions}
                  items={patientsInfo[1].items}
                  iconClassName="fas fa-ban fa-lg"
                  headerClassName="text-left"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard
                  title={patientsInfo[2].title}
                  descriptions={patientsInfo[2].descriptions}
                  items={patientsInfo[2].items}
                  iconClassName="fa fa-user-nurse fa-lg"
                  headerClassName="text-left"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard
                  title={patientsInfo[3].title}
                  descriptions={patientsInfo[3].descriptions}
                  items={patientsInfo[3].items}
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
      <DarkFooter />
    </>
  );
};

export default PatientInfoPage;
