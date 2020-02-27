import React from "react";
import IconCheckList from "./IconCheckList";
import IconSocialMediaList from "./IconSocialMediaList";
import DescriptionList from "./DescriptionList";
import BookingButton from "./BookingButton";
import {
  Card,
  CardBody,
  CardImg,
  CardHeader,
  CardTitle,
  CardText,
  Badge
} from "reactstrap";

const BusinessCard = ({
  emp,
  cardClassName,
  headerClassName,
  cardImageClassName,
  cardBodyClassName
}) => {
  let path = emp.image;

  if (!cardImageClassName)
    cardImageClassName = "rounded-circle img-fluid business-card-image";

  return (
    <>
      <Card className={cardClassName}>
        {/* <div > */}
        <CardHeader className={headerClassName}>
          <CardImg
            className={cardImageClassName}
            alt="employee image"
            src={require(`../../assets/img/${path}`)}
            top
          ></CardImg>
        </CardHeader>

        <CardBody className={cardBodyClassName}>
          <CardTitle tag="h4" className="business-card-name text-muted">
            {emp.name}
          </CardTitle>
          <CardText tag="h4" className="business-card-title text-primary">
            {emp.title}
          </CardText>

          <div className="spoken-languages">
            {emp.speaks.map((lang, index) => (
              <Badge key={index} className="language-pill" pill>
                {lang}
              </Badge>
            ))}
          </div>

          <hr />
          <DescriptionList
            list={emp.descriptions}
            includeNewLine={false}
            className="text-justified font-paragraph text-muted"
          />
          <dir className="new-line"></dir>
          <IconCheckList
            list={emp.accreditations}
            className="text-left font-paragraph text-muted"
            ulClassName="fa-ul"
            liClassName="fa-li"
            iconClassName="fa fa-check-circle fa-lg"
          />
        </CardBody>
        <div>
          <IconSocialMediaList list={emp.socialMedia} size="lg" color="info" target="_blank" rel ="noopener noreferrer" />
          {emp.booking ? (
            <BookingButton doctorId={emp.bookingDoctorId} size="lg" />
          ) : null}
        </div>

        {/* </div> */}
      </Card>
    </>
  );
};

export default BusinessCard;
