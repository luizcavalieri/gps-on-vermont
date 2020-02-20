import React from "react";
import servicesContent from "../../data/services-content";
import ServiceCardPreviewRow from "./ServiceCardPreviewRow";
import { Row } from "reactstrap";
import { chunks } from "../../views/examples/commons";

const ServiceCardPreview = ({ numberOfItemsPerRow }) => {
  // assign a default value (3) just in case user forgot to assign it
  if (!numberOfItemsPerRow) numberOfItemsPerRow = 3;
  //numberOfItemsPerRow is the number of columns in a row, separates de data in rows of numberOfItemsPerRow columns
  const rows = chunks(servicesContent, numberOfItemsPerRow);
  // console.log(rows);

  return (
    <>
      {rows.map((row, index) => (
        <Row key={index}>
          <ServiceCardPreviewRow row={row} />
        </Row>
      ))}
    </>
  );
};

export default ServiceCardPreview;
