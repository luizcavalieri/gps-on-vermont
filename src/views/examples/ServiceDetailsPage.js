import React from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import OtherPageHeader from "../../components/Headers/OtherPageHeader";
import { Container } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import { Redirect } from "react-router-dom";

const ServiceDetailsPage = props => {
  // if(!props.location.state.service.service){

  // }
//   let service;
  //   if (!props.location.state) service = "nothing";
  //   else service = props.location.state.service.service;

  // let service;
  // console.log(service);
  

  if (!props.location.state) {
    return (
      <>
        <Redirect to="/not-found" />;
      </>
    );
  } else {
    const service = props.location.state.service.service;
    let path = "our-services-people.jpg";
    return (
      <>
        {/* {service === "nothing" ? <Redirect to="/not-found" /> : ""} */}
        <OtherNavbar />
        <div className="wrapper">
          <OtherPageHeader message={service.title} />
          <div className="section text-center">
            <Container className=" text-muted">
              <div className="justify-content-center">
                <img
                  src={require(`../../assets/img/${path}`)}
                  alt={service.title}
                />
              </div>
            </Container>
          </div>
          <DarkFooter />
        </div>
      </>
    );
  }
};

export default ServiceDetailsPage;
