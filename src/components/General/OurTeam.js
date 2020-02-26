import React, { useState } from "react";
import BusinessCard from "./BusinessCard";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { deviceType } from "react-device-detect";
import Switch from "react-bootstrap-switch";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

// https://www.npmjs.com/package/react-multi-carousel
const OurTeam = ({ staffData }) => {
  const [switchValue, setSwitchValue] = useState(true);
  //   const [isMoving, setIsMoving] = useState(false);
  // console.log("deviceType: " + deviceType);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      //   slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      //   slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      //   slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30
    }
  };
  let value = deviceType !== "mobile" ? "all 1s linear" : "all .5";
  let switchComponent;
  if (deviceType === "tablet") {
    switchComponent = (
      <div className="d-flex flex-row align-items-center">
        <div className="p-2">Auto Scrolling</div>
        <div className=" ">
          <Switch
            defaultValue={switchValue}
            onChange={(el, state) => setSwitchValue(state)}
            bsSize="large"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex flex-row justify-content-center ">
        {switchComponent}
        {/* <Button className="btn-round ml-auto" color="info" size="sm"></Button> */}

        <Link
          to={{
            pathname: "/staff-page"
          }}
        >
          <Button className="btn-round " color="info" size="sm">
            View All
          </Button>
        </Link>
      </div>
      <br />
      <Carousel
        // centerMode={true}
        // partialVisible={true}
        // beforeChange={() => {
        //   setIsMoving(true);
        // }}
        // afterChange={() => {
        //   setIsMoving(false);
        // }}
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        arrows
        // ssr={true} // means to render carousel on server-side.
        ssr={true}
        // infinite={true}
        infinite={deviceType !== "mobile" ? true : false}
        autoPlay={
          deviceType !== "mobile"
            ? deviceType === "tablet" && switchValue
              ? true
              : false
            : false
        }
        // autoPlay={switchValue}
        // autoPlay={true}
        autoPlaySpeed={6000}
        // autoPlaySpeed={1}
        keyBoardControl={true}
        // customTransition="all .5"
        // customTransition="all .3"
        // transitionDuration={500}
        // customTransition="all 1s linear"

        customTransition={value}
        additionalTransfrom={0}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass={"custom-dot-list-style"}
        itemClass="carousel-item-padding-40-px"
        slidesToSlide={1}
        // renderDotsOutside={true}
      >
        {staffData.map((employee, index) => (
          <div key={index}>
            <BusinessCard
              emp={employee}
              cardClassName={"busines-card"}
              cardImageClassName={
                "rounded-circle img-fluid img-raised business-card-image-size"
              }
              cardBodyClassName={"business-card-body"}
            />
          </div>
        ))}
      </Carousel>
      {/* </div> */}
    </>
  );
};

export default OurTeam;