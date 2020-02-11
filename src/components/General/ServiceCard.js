import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import DescriptionItem from "./DescriptionItem";
import IconCheckList from "./IconCheckList";

const ServiceCard = ({ service }) => {
  return (
    <>
      <Card className="card-data">
        <CardHeader className="card-header">
          <i className={service.icon.concat(" fa-icon-card-header")} ></i>
          {service.title}
        </CardHeader>
        <CardBody>
          <DescriptionItem
            desc={service.description}
            className="text-justified font-paragraph"
          />
          <dir className="new-line"></dir>
          <IconCheckList
            list={service.items}
            className="text-left font-paragraph"
            ulClassName="fa-ul"
            liClassName="fa-li"
            iconClassName="fa fa-check-circle fa-lg"
          />
        </CardBody>
      </Card>
    </>
  );
};

export default ServiceCard;
