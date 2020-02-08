import React from "react";
import BusinessCard from "./BusinessCard";
import { Col } from "reactstrap";

const StaffRow = ({ row }) => {
  return (
    <>
      {row.map((col,index) => (
        <Col key={index}>
          <BusinessCard emp={col}  />
        </Col>
      ))}
    </>
  );
};

export default StaffRow;
