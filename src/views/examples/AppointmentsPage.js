import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import { headerScrolling } from "./commons";
import { Container } from "reactstrap";
import patientsInfo from "../../data/patientsInfo-content";
import InfoCard from "../../components/General/InfoCard";
import BookingButton from "../../components/General/BookingButton";

//https://daveceddia.com/pluggable-slots-in-react-components/
const AppointmentsPage = () => {
  const message = "Schedule now";

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
              headerRightContent={
                <BookingButton className="btn-weight" size="sm" />
              }
            ></InfoCard>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
};

export default AppointmentsPage;
