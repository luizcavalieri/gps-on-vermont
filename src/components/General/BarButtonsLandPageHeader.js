import React from "react";
import { Row, Col, Button, i, UncontrolledTooltip } from "reactstrap";
import BookingButton from "./BookingButton";
import IconSocialMediaItem from "./IconSocialMediaItem";

const BarButtonsLandPageHeader = () => {
  // const path = "career.jpg";
  return (
    <>
      <Row className="row justify-content-center">
        <Col xs="11" sm="11" md="6" lg="6" xl="3">
          <BookingButton
            className="btn-block button-online-appointments btn-font btn-weight"
            doctorId="https://www.hotdoc.com.au/medical-centres/wodonga-VIC-3690/gps-on-vermont/doctors"
            size="md"
          />
          {/* <CardImg
            className={"rounded-circle img-fluid career-card-image img-raised ml-auto"}
            alt="career image"
            src={require(`../../assets/img/${path}`)}
            
          ></CardImg> */}
        </Col>
      </Row>
      {/* <Row> */}
      <div className="button-container">
        {/* <Button className="btn-round" color="info" size="lg">
            Like us
          </Button> */}

        <IconSocialMediaItem
          id="tooltip515203352"
          mediaId="facebook"
          link={`https://www.facebook.com/gpsonvermont/`}
          color="info"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        />
        <UncontrolledTooltip delay={0} target="tooltip515203352">
          Follow me on facebook
        </UncontrolledTooltip>

        <IconSocialMediaItem
          id="tooltip515203353"
          mediaId={"landline"}
          link={"tel: 0260252189"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          color={"info"}
          size={"lg"}
        />
        <UncontrolledTooltip delay={0} target="tooltip515203353">
          Call Us: 0260252189
        </UncontrolledTooltip>

        {/* <IconSocialMediaItem
          id="tooltip515203354"
          mediaId={"mobile"}
          link={"tel: 0477413700"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          color={"info"}
          size={"lg"}
        />
        <UncontrolledTooltip delay={0} target="tooltip515203354">
          Call Us: 0477413700
        </UncontrolledTooltip> */}

        <Button
          id="tooltip515203355"
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
        <UncontrolledTooltip delay={0} target="tooltip515203355">
          Visit Us
        </UncontrolledTooltip>

      </div>
      {/* <div> */}

      {/* </div> */}
      {/* </Row> */}
    </>
  );
};

export default BarButtonsLandPageHeader;
