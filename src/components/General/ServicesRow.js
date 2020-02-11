import React from "react";
import { Col } from "reactstrap";
import InfoCard from "./InfoCard";

const ServicesRow = ({ row }) => {
  return (
    <>
      {row.map((col, index) => (
        <Col key={index} xs="12" xl="6">
          <InfoCard record={col} iconClassName={col.icon}/>
        </Col>
      ))}
    </>
  );
};

export default ServicesRow;
