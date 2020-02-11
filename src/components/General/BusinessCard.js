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

const BusinessCard = ({ emp }) => {
  let path = emp.image;
  return (
    <>
      <Card>
        <div className="team-player">
          <CardHeader className="business-card-header">
            <CardImg
              className="rounded-circle img-fluid img-raised
              business-card-image"
              alt="..."
              src={require(`../../assets/img/${path}`)}
              top
            ></CardImg>
          </CardHeader>

          <CardBody className="business-card-body">
            <CardTitle tag="h4" className="business-card-title">
              {emp.name}
            </CardTitle>
            <CardText className="category text-info">{emp.title}</CardText>
            <DescriptionList
              list={emp.descriptions}
              includeNewLine={ false }
              className="text-justified font-paragraph"
            />
            <dir className="new-line"></dir>
            <IconCheckList
              list={emp.accreditations}
              className="text-left font-paragraph"
              ulClassName="fa-ul"
              liClassName="fa-li"
              iconClassName="fa fa-check-circle fa-lg"
            />
            <IconSocialMediaList list={emp.socialMedia} />
            {emp.booking ? <BookingButton doctorId={emp.bookingDoctorId} /> : null}
          </CardBody>
        </div>
      </Card>
    </>
  );
};

export default BusinessCard;
