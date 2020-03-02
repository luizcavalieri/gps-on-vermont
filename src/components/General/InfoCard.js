import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import IconCheckList from "./IconCheckList";
import DescriptionList from "./DescriptionList";

const InfoCard = ({ title, descriptions, items, iconClassName, headerClassName, headerRightContent, footerContent }) => {
  if (!title) return null;
  return (
    <>
      <Card className="card-data">
        <CardHeader className={headerClassName}>
          <div className="clearfix">
            <div className="float-left">
              <i className={iconClassName.concat(" ").concat("fa-icon-card-header")}></i>
              {title}
            </div>
            <div className="float-right">
              {headerRightContent}
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <DescriptionList
            list={descriptions}
            includeNewLine={true}
            className="text-justified font-paragraph "
          />
          <dir className="new-line"></dir>
          <IconCheckList
            list={items}
            className="text-left font-paragraph"
            ulClassName="fa-ul"
            liClassName="fa-li"
            iconClassName="fa fa-check-circle fa-lg"
          />
        </CardBody>
        {footerContent}
      </Card>
    </>
  );
};

export default InfoCard;
