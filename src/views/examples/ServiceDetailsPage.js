import React from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import { Row, Container, CardImg } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";


const ServiceDetailsPage = ( props ) => {
    
    const service = props.location.state.service.service;
    console.log(service);
    
    // console.log(props);
   let path = "image-from-rawpixel-id-1030459-original.jpg"
  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <OtherPageHeader message={service.title} />
        <div className="section text-center">
          <Container className=" text-muted">
            <Row>
                {/* <Image src={require(`../../assets/img/${path}`)} /> */}
                <CardImg src={require(`../../assets/img/${path}`)} />
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default ServiceDetailsPage;
