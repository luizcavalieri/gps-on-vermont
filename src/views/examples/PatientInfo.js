import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table
} from "reactstrap";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";

const PatientInfo = () => {
  const message = "Change me";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <OtherPageHeader message={message} />
        <div className="section text-center">
          <Container>
            {/* <Row>
              <Col className="text-left ml-auto mr-auto">
                <Card className="card-data">
                  <CardHeader className="card-header">Appointments</CardHeader>
                  <CardBody className="card-body">
                    <div className="card-content">
                      <div className="text-justified">
                        <p>
                          If your appointment is other than a standard
                          consultation, please tell the receptionist when you
                          make an appointment so that extra time can be allowed.
                          Longer consultation is required for e.g. women’s
                          health, pap smear, medical assessment, or an initial
                          visit for a work-related injury or motor vehicle
                          accident, medical report, pre-employment examination
                          or a procedure.
                        </p>
                        <p>
                          We have “Quick Clinics” for repeat script and update
                          referrals from 8am to 8.30am and these appointments
                          are 5 minutes only Monday to Friday. Patients unable
                          to attend these appointments can request repeat
                          scripts or update referrals over the phone, (Press 3
                          for nurse and leave a message if not answered) but
                          these will be completed at the discretion of the
                          treating doctor. A fee of $15 will be charged for this
                          service.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                  <div
                    className="card-footer-padding"
                    style={{ textAlign: "left" }}
                  >
                    <p>
                      <h6>Cancellations and Non Attendance</h6>
                      GPs on Vermont Medical Centre requires 3 hours
                      notification of a cancellation or a Failure to Attend Fee
                      of $30 will be incurred and payment will be required
                      before another appointment can be booked. Appointments
                      prior to 11am cannot be cancelled, please consider this
                      before booking.
                    </p>
                  </div>
                </Card>
              </Col>
            </Row> */}
            <Row>
              <Col>
                <h2 className="title text-left">Appointments</h2>

                <h5 className=" text-justified description ">
                  If your appointment is other than a standard consultation,
                  please tell the receptionist when you make an appointment so
                  that extra time can be allowed. Longer consultation is
                  required for e.g. women’s health, pap smear, medical
                  assessment, or an initial visit for a work-related injury or
                  motor vehicle accident, medical report, pre-employment
                  examination or a procedure. <br />
                  We have “Quick Clinics” for repeat script and update referrals
                  from 8am to 8.30am and these appointments are 5 minutes only
                  Monday to Friday. Patients unable to attend these appointments
                  can request repeat scripts or update referrals over the phone,
                  (Press 3 for nurse and leave a message if not answered) but
                  these will be completed at the discretion of the treating
                  doctor. A fee of $15 will be charged for this service.
                </h5>
                <h2 className="title text-left">
                  Cancellations and Non Attendance
                </h2>
                <h5 className=" text-justified description ">
                  GPs on Vermont Medical Centre requires 3 hours notification of
                  a cancellation or a Failure to Attend Fee of $30 will be
                  incurred and payment will be required before another
                  appointment can be booked. Appointments prior to 11am cannot
                  be cancelled, please consider this before booking.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="title text-left">Test Results</h2>

                <h5 className=" text-justified description ">
                  GPs on Vermont Medical Centre does not provide test results
                  over the phone under any circumstance.
                  <ul>
                    <li>
                      Normal results – you will not be contacted. You can book
                      an appointment at your convenience.
                    </li>
                    <li>
                      Abnormal result - you will be contacted by the Practice
                      Nurse or Practice Manager and advised to make a follow-up
                      appointment.
                    </li>
                    <li>
                      Urgent result – you will be contacted by the Practice
                      Nurse or Practice Manager and an appointment made
                      available within the next 24 hours.
                    </li>
                  </ul>
                </h5>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className="title text-left">My Health - Record</h2>

                <h5 className=" text-justified description ">
                  Having a My Health record means your important health
                  information like allergies, current conditions and treatments,
                  medicine details, pathology reports or diagnosis imaging scan
                  reports can be digitally stored inn one place. Healthcare
                  providers like doctors, specialist and hospital staff can see
                  these details online from anywhere at any time when they need
                  to, such as in an accident or emergency. Please advise your
                  doctor at your appointment if you want this information to be
                  uploaded.
                </h5>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className="title text-left">Fees</h2>
                <Table striped bordered>
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
            </Row>
          </Container>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default PatientInfo;
