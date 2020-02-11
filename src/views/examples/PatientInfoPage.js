import React, { useEffect } from "react";
import { Container, Row, Col, Table } from "reactstrap";
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

            {/* <Row>
              <Col>
                <h2 className="title text-left">Fees</h2>
                <Table striped bordered responsive >
                  <thead className="fees-table-row">
                    <tr>
                      <th></th>
                      <th>Amount Payable on the day</th>
                      <th>Medicare Rebate on the day</th>
                      <th>Out of pocket cost</th>
                    </tr>
                  </thead>
                  <tbody className="fees-table-row">
                    <tr>
                      <th scope="row" className="text-justified">
                        <div>Pensioners</div>
                        <div> Health Card Holders</div>
                      </th>
                      <td>Bulk Billed</td>
                      <td>Not Applicable</td>
                      <td>Not Applicable</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-justified">
                        <div>Children under 16 yrs</div>
                        <div>Adolescents 16-25 yrs</div>
                      </th>
                      <td>Bulk Billed</td>
                      <td>Not Applicable</td>
                      <td>Not Applicable</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-justified">
                        DVA Patients
                      </th>
                      <td>Bulk Billed</td>
                      <td>Not Applicable</td>
                      <td>Not Applicable</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-justified">
                        Standard Consultation 10 minutes
                      </th>
                      <td>$63.20</td>
                      <td>$38.20</td>
                      <td>$25.00</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-justified">
                        Long Consultation 20 minutes
                      </th>
                      <td>$98.95</td>
                      <td>$73.95</td>
                      <td>$25.00</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row> */}
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
