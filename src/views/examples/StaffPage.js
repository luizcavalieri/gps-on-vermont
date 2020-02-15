import React, { useEffect } from "react";
import staffContent from "../../data/staff-content";
import Staff from "../../components/General/Staff";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import { headerScrolling } from "./commons";
import { Container } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";

const StaffPage = () => {

  const contactMessage = "Here is our team";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <OtherPageHeader message={contactMessage} />
        <div className="section section-team text-center">
          <Container className="text-muted">
            <div className="team">
              <Staff staffData={staffContent} />
            </div>
          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
};
export default StaffPage;
