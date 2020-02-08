import React from "react";
import { Row } from "reactstrap";
import { chunks } from "../../views/examples/commons";
import StaffRow from "./StaffRow";

const Staff = ({ staffData }) => {
  if (!staffData) return null;
  //2 is the number of columns in a row
  const rows = chunks(staffData, 2);
  return (
    <>
      {rows.map((row, index) => (
        <Row key={index}> 
          <StaffRow  row={row} />
        </Row>
      ))}

    </>
  );
};

export default Staff;
