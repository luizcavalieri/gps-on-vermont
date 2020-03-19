import React from "react";
import servicesContent from "../../data/services-content";
import { Row, Col } from "reactstrap";
import ServiceCard from "./ServiceCard";

const ServiceCardBlock = () => {

  return (
    <>
      <Row >
        {servicesContent.map((item, index) => (
          <Col key={index} xl="4" lg="4" md="6" className="service-preview-card-col">
            <ServiceCard service={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ServiceCardBlock;
