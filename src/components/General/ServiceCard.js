import React from "react";
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";

const ServiceCard = ({ service, className:passedClasses }) => {
  
  let path = service.image;
//   if(!passedClasses) passedClasses = "btn-font btn-weight";
  if(!passedClasses) passedClasses = " font-paragraph";
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
          <CardBody >
            <CardTitle tag="h4" className="business-card-title service-preview-card-body-title">
              {service.title}
            </CardTitle>
            <CardText className="category text-primary">
                {service.descriptions}
            </CardText>
            <Button color={"info"} className={passedClasses}>View Service</Button>
          </CardBody>
        </div>
      </Card>
    </>
  );
};

export default ServiceCard;
