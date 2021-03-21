import React from "react";
import IconCheckList from "./IconCheckList";
import IconSocialMediaList from "./IconSocialMediaList";
import { Link } from 'react-router-dom';
import BookingButton from "./BookingButton";
import {
  Card,
  CardBody,
  CardImg,
  CardHeader,
  CardTitle,
  CardText,
  Badge,
  CardFooter
} from "reactstrap";
// import Availability from "./Availability";

const BusinessCardPreview = ({ emp, cardClassName, headerClassName, cardImageClassName, cardBodyClassName }) => {
  const TEXT_SIZE = 60;
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
            alt={emp.name}
            src={require(`../../assets/img/staff/${path}`)}
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
          {/* <hr /> */}
          {/* <Availability label={"Availability: "} values={emp.availability} /> */}
          <hr />

            {emp.descriptions[0].length > TEXT_SIZE ||
                emp.descriptions.length > 1 ?
                (
                    <>
                        <section className="font-paragraph mr-auto text-muted text-left">
                            {emp.descriptions[0].length > TEXT_SIZE
                                        ? emp.descriptions[0]
                                            .substring(0, TEXT_SIZE)
                                            .concat("...")
                                        : emp.descriptions[0]}
                        </section>
                        <section className="font-paragraph read-more mr-3 mb-2">
                            <Link to={`/staff-page`} >
                                Read more
                                <i className="ml-2 fa fa-angle-double-right"></i>
                            </Link>
                        </section>
                    </>
                ) :
                null
            }

          <dir className="new-line"></dir>
          <IconCheckList
            list={emp.accreditations}
            className="text-left font-paragraph text-muted"
            ulClassName="fa-ul"
            liClassName="fa-li"
            iconClassName="fa fa-check-circle fa-lg"
          />
        </CardBody>

        <CardFooter>
          <IconSocialMediaList list={emp.socialMedia} size="lg" color="info" target="_blank" rel="noopener noreferrer" />
          {emp.booking ? (
            <div className="pt-4">
              <BookingButton doctorId={emp.bookingDoctorId} size="large" />
            </div>
          ) : null}
        </CardFooter>

      </Card>
    </>
  );
};

export default BusinessCardPreview;
