import React from "react";
import BusinessCard from "./BusinessCard";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { isMobileOnly, isTablet } from "react-device-detect";

// https://www.npmjs.com/package/react-multi-carousel
const OurTeam = ({ staffData }) => {
//   const [isMoving, setIsMoving] = useState(false);
  let deviceType = "";
  if (!staffData) return null;
  if (isMobileOnly) {
    deviceType = "mobile";
  }
  if (isTablet) {
    deviceType = "tablet";
  } 
//   console.log(deviceType);
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

    
  return (
    <>
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
        autoPlay={deviceType !== "mobile" ? true : false}
        // autoPlay={true}
        autoPlaySpeed={3000}
        // autoPlaySpeed={1}
        keyBoardControl={true}
        // customTransition="all .5"
        // customTransition="all .3"
        // transitionDuration={500}
        // customTransition="all 1s linear"
        customTransition={deviceType !== "mobile" ? "all 1s linear" : "all .5"}
        additionalTransfrom={0}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        slidesToSlide={1}
        // renderDotsOutside={true} 
      >
        {staffData.map((employee, index) => (
          <div key={index}>
            <BusinessCard emp={employee}  cardClassName={"busines-card"} cardImageClassName={"rounded-circle img-fluid img-raised business-card-image-size"}
                cardBodyClassName={"business-card-body"}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default OurTeam;
