import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, className: passedClasses }) => {
  let path = service.image;

  if (!passedClasses) passedClasses = " font-paragraph";
  return (
    <>
      <Card className="service-preview-card">
        <div className="team-player">
          <CardHeader>
            <CardImg
              className=" img-fluid "
              alt="..."
              src={require(`../../assets/img/${path}`)}
              top
            >
            </CardImg>
          </CardHeader>
          <CardBody>
            <CardTitle
              tag="h4"
              className="business-card-title service-preview-card-body-title"
            >
              {service.title}
            </CardTitle>
            <CardText className="category text-primary">
              {service.shortIntro}
            </CardText>
            <Link to={`/service-details/${service.id}`}>
              <Button color={"info"} className={passedClasses}>
                View Service
              </Button>
            </Link>
          </CardBody>
        </div>
      </Card>
    </>
  );
};

export default ServiceCard;
