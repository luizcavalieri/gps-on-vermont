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
              alt={service.title}
              src={require(`../../assets/img/services/${path}`)}
              top
            >
            </CardImg>
          </CardHeader>
          <CardBody>
            <CardTitle
              tag="h4"
              className="text-muted business-card-title service-preview-card-body-title"
            >
              {service.title}
            </CardTitle>
            <CardText className="category text-primary" style={{height: 185}}>
              {service.shortIntro}
            </CardText>
            <Link to={`/service-details/${service.id}`}>
              <Button color={"info"} className={passedClasses}>
                More Details
              </Button>
            </Link>
          </CardBody>
        </div>
      </Card>
    </>
  );
};

export default ServiceCard;
