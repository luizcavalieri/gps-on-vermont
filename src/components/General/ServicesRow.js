import React from "react";
import { Col } from "reactstrap";
import ServiceCard from "./ServiceCard";

const ServicesRow = ({ row }) => {
  return (
    <>
      {row.map((col, index) => (
        <Col key={index} xs="12" xl="6">
          <ServiceCard service={col} />
        </Col>
      ))}
    </>
  );
};

export default ServicesRow;
