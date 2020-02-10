import React from "react";
import { Row } from "reactstrap";
import { chunks } from "../../views/examples/commons";
import ServicesRow from "./ServicesRow";

const Services = ({ servicesData }) => {
  if (!servicesData) return null;
  //2 is the number of columns in a row, separates de data in rows of 2 columns
  const rows = chunks(servicesData, 2);
  return (
    <>
      {rows.map((row, index) => (
        <Row key={index}>
          <ServicesRow row={row} />
        </Row>
      ))}
    </>
  );
};

export default Services;
