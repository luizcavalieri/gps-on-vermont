import React from "react";
import staffContent from "../../components/General/staff-content";
import Staff from "../../components/General/Staff";
import { Row } from "reactstrap";

const StaffPage = () => (
  <>
    <h2 className="title">Here is our team</h2>
    <div className="team">
      <Row>
        <Staff staffData={staffContent} />
      </Row>
    </div>
  </>
);

export default StaffPage;
