import React from "react";
import { Container } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import BookingButton from "../../components/General/BookingButton";
import NewsDetail from "../../components/General/NewsDetail";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import newsContent from "../../data/news-content";
import NotFoundPage from "./NotFoundPage";
import BackButton from "../../components/General/BackButton";


const NewsDetailsPage = ({ match }) => {
  const idFound = match.params.pageLink;

  let articles = [];

  if (idFound !== "all") {
    const newsFound = newsContent.find(article => article.pageLink === idFound);
    if (!newsFound) return <NotFoundPage />;
    articles.push(newsFound);
  } else {
    articles = newsContent;
  }

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <LandingPageHeader
          title={<BookingButton className="btn-weight" size="sm" />}
          imageClassName={"page-header page-header-xsmall"}
          contentClassName={"content-center-other-pages"}
          titleClassName={"title-small-header"}
        />
        <div className="section text-center mb-5 ">
          <BackButton children={"Go Back"} className="btn-round our-services-go-back-button" />
          <Container className="text-muted ">
            {articles.map((article, index) => (
              <NewsDetail key={index} article={article} />
            ))}
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default NewsDetailsPage;


