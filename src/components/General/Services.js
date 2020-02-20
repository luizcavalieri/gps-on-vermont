import React from "react";
import { Row, Col } from "reactstrap";
import InfoCard from "./InfoCard";

const Services = ({ servicesData }) => {
  if (!servicesData) return null;

  return (
    <>
      <Row >
        {servicesData.map((service, index) => (
          <Col key={index} xs="12" xl="6">
            <InfoCard record={service} iconClassName={service.icon} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Services;
