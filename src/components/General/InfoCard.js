import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import IconCheckList from "./IconCheckList";
import DescriptionList from "./DescriptionList";

const InfoCard = ({ record, iconClassName, headerClassName, headerRightContent }) => {
  if (!record) return null;
  return (
    <>
      <Card className="card-data">
        <CardHeader className={headerClassName}>
          <div className="clearfix">
            <div className="float-left">
              <i className={iconClassName.concat(" ").concat("fa-icon-card-header")}></i>
              {record.title}
            </div>
            <div className="float-right">
              {headerRightContent}
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <DescriptionList
            list={record.descriptions}
            includeNewLine={true}
            className="text-justified font-paragraph "
          />
          <dir className="new-line"></dir>
          <IconCheckList
            list={record.items}
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

export default InfoCard;
