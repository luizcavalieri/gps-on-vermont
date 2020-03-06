import React from "react";
import { Row, Col, CardFooter } from "reactstrap";
import InfoCard from "./InfoCard";
import { Link } from "react-router-dom";


const Services = ({ servicesData }) => {
  if (!servicesData) return null;

  function convertIntoArray(element) {
    let introArray = [];
    introArray.push(element);
    return introArray;
  }

  const footerComponent = (service) => (
    <CardFooter className="card-footer-padding">
        <div>
          <Link to={`/service-details/${service.id}`}>  
            View Details
          </Link>
        </div>
    </CardFooter>
  );

  return (
    <>
      <Row>
        {servicesData.map((service, index) => (
          <Col key={index} xs="12" xl="6">
            <InfoCard
              title={service.title}
              headerClassName={"capitalize"}
              descriptions={convertIntoArray(service.shortIntro)}
              iconClassName={service.icon}
              footerContent={footerComponent(service)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Services;
