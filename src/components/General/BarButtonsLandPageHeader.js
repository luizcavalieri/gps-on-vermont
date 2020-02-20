import React from "react";
import {Row, Col, Button, i, UncontrolledTooltip} from 'reactstrap';
import BookingButton from "./BookingButton";
import IconSocialMediaItem from "./IconSocialMediaItem";

const BarButtonsLandPageHeader = () => {
  return (
    <>
      <Row className="row justify-content-center">
        <Col xs="11" sm="11" md="6" lg="6" xl="3">
          <BookingButton
            className="btn-block button-online-appointments btn-font btn-weight"
            doctorId="https://www.hotdoc.com.au/medical-centres/wodonga-VIC-3690/gps-on-vermont/doctors"
            size="md"
          />
        </Col>
      </Row>
      <div className="button-container">
        <Button className="btn-round" color="info" size="lg">
          Like us
        </Button>

        <IconSocialMediaItem
          id="tooltip515203352"
          mediaId="facebook"
          link=""
          color="info"
          size="lg"
        />
        <UncontrolledTooltip delay={0} target="tooltip515203352">
          Follow me on facebook
        </UncontrolledTooltip>

        <Button
          className=" btn-icon btn-round "
          color={"info"}
          size={"lg"}
          href={`https://goo.gl/maps/1Uy3tyShraVWj6MP7`}
          target="_blank"
          rel="noopener noreferrer"

          // onClick={e => e.preventDefault()}
        >
          <i className="fas fa-map-marker-alt fa-2x fa-blink maps-icon "></i>
        </Button>
      </div>
    </>
  );
};

export default BarButtonsLandPageHeader;
