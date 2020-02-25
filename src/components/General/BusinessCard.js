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
  CardText
} from "reactstrap";

const BusinessCard = ({ emp, cardClassName, headerClassName, cardImageClassName, cardBodyClassName }) => {
  let path = emp.image;

  if(!cardImageClassName) cardImageClassName = "rounded-circle img-fluid business-card-image";

  return (
    <>
      <Card className={cardClassName}>
        {/* <div > */}
          <CardHeader className={headerClassName}>
            <CardImg
              className={cardImageClassName}
              alt="..."
              src={require(`../../assets/img/${path}`)}
              top
            ></CardImg>
          </CardHeader>

          <CardBody className={cardBodyClassName}>
            <CardTitle tag="h4" className="business-card-title text-muted">
              {emp.name}
            </CardTitle>
            <CardText className="category text-primary">{emp.title}</CardText>
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
          <div >
            <IconSocialMediaList list={emp.socialMedia} size="lg" color="info"/>
            {emp.booking ? (
              <BookingButton doctorId={emp.bookingDoctorId}  size="lg" />
            ) : null}
          </div>
          
        {/* </div> */}
      </Card>
    </>
  );
};

export default BusinessCard;