import React from "react";
import { Row, Col } from "reactstrap";
import BusinessCard from "./BusinessCard";

const Staff = ({ staffData }) => {
  if (!staffData) return null;

  return (
    <>
      <Row>
        {staffData.map((employee, index) => (
          <Col key={index} md="6" lg="6" xl="4" >
            <BusinessCard emp={employee} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Staff;
