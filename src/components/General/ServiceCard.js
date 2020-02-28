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
  //   if(!passedClasses) passedClasses = "btn-font btn-weight";
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
            ></CardImg>
            {/* <i className="fa fa-newspaper fa-lg fa-icon-card-header fa-10x" ></i> */}
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
            {/* <Link className="text-info"  to="/afterhours-page">Check after hours care</Link> */}


            <Link to={{
              pathname: "/service-details",
              state: {
                 service: {service} 
              }
            }}>
              
              <Button
                color={"info"}
                className={passedClasses}
              >
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
