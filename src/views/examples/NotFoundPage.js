import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/not-found.jpg") + ")"
          }}
        ></div>
        <Container>
          <div className="content-center ">
            <h1 className="not-found-title ">Sorry, something went wrong</h1>
            <Link to={{
              pathname: "/landing-page"
            }}>
              <Button className="go-back-home-button" color="primary">
                GO TO HOMEPAGE
              </Button>
              </Link>
            
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFoundPage;
