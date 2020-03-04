import React from "react";
import newsContent from "../../data/news-content";
import NotFoundPage from "./NotFoundPage";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import { Container, Row, Col } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import ReactLinkify from "react-linkify";
import BookingButton from "../../components/General/BookingButton";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const NewsDetailsPage = ({ match }) => {
  const idFound = match.params.id;

  let articles = [];

  if (idFound !== "all") {
    const newsFound = newsContent.find(article => article.id === idFound);
    if (!newsFound) return <NotFoundPage />;
    articles.push(newsFound);
  } else {
    articles = newsContent;
  }

  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <LandingPageHeader
          imageClassName={"page-header page-header-xsmall"}
          contentClassName={"content-center-other-pages"}
          titleClassName={"title-small-header"}
        />
        <div className="section text-center" style={{ padding: 0 }}>
          <Container className="text-muted">
            {articles.map((article, index) => (
              <div key={index} className="article">
                <Row>
                  <Col md="4" xl="4">
                    <div className="justify-content-center">
                      <img
                        className="img-fluid"
                        width={"150%"}
                        src={require(`../../assets/img/${article.img}`)}
                        alt={article.title}
                      />
                    </div>
                  </Col>
                  <Col className="d-flex flex-column" md="8" xl="8">
                    <h3 className=" text-capitalize sub-title">
                      {article.title}
                    </h3>
                    <h5 className="description text-left">
                      {article.contents[0]}
                    </h5>
                  </Col>
                </Row>
                <h1>{""}</h1>
                {article.contents.map((paragraph, index) =>
                  index > 0 ? (
                    <h5 key={index} className="description text-left">
                      <ReactLinkify componentDecorator={componentDecorator}>
                        {paragraph}
                      </ReactLinkify>
                    </h5>
                  ) : null
                )}
              </div>
            ))}
          </Container>
          <BookingButton />
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default NewsDetailsPage;
