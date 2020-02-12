import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";
import { Container } from "reactstrap";
import patientsInfo from "../../data/patientsInfo-content";
import InfoCard from "../../components/General/InfoCard";

const AppointmentsPage = () => {
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
          <Container className=" text-muted">
            <InfoCard
              record={patientsInfo[0]}
              iconClassName="far fa-calendar-alt fa-lg"
              headerClassName="text-left"
            />
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
};

export default AppointmentsPage;
