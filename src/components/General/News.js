import React from "react";
import { RibbonContainer, RightLargeRibbon } from "react-ribbons";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader, Col, Media, Row } from "reactstrap";
import jobOffers from "../../data/job-offers";

const News = ({ news }) => {
  let tot = news.length;
  const TEXT_SIZE = 150;

  const headerComponent = comp => {
    if (!jobOffers.length) {
      return comp;
    } else {
      if (!jobOffers.filter(job => job.enabled).length) {
        return comp;
      } else {
        return (
          <RibbonContainer className="news-ribbon">
            <Link to="/career-page">
              <RightLargeRibbon
                backgroundColor="#cc4400"
                color="#f0f0f0"
                fontFamily="Arial"
              >
                Now Hiring
              </RightLargeRibbon>
            </Link>
            {comp}
          </RibbonContainer>
        );
      }
    }
  };
  const header = (
    <CardHeader className="card-header">
      <div>
        <i className="fa fa-newspaper fa-lg fa-icon-card-header"></i>
        Latest News
      </div>
    </CardHeader>
  );

  return (
    <>
      <Card className="card-data ">
        {headerComponent(header)}

        <CardBody className="overflow-vertical scrollbar-ripe-malinka">
          {news.map((item, index) => (
            <Card key={index}>
              <Media className="news-content">
                <Row>
                  <Col sm="12" md="5">
                    <Media
                      className="mr-3 image-details"
                      object
                      src={require(`../../assets/img/${item.img}`)}
                      alt={item.title}
                    />
                  </Col>
                  <Col sm="12" md="7">
                    <Media body>
                      <Media heading className="media-title card-title">
                        {item.title}
                      </Media>
                      <p className="preview-content">
                        {item.contents[0].length > TEXT_SIZE
                          ? item.contents[0]
                            .substring(0, TEXT_SIZE)
                            .concat("...")
                          : item.contents[0]}
                      </p>
                      {item.contents[0].length > TEXT_SIZE ||
                        item.contents.length > 1 ? (
                          <Link to={`/news/is/${item.pageLink}`}>
                            <div className="read-more">Read more</div>
                          </Link>
                        ) : null}
                    </Media>
                  </Col>
                </Row>
              </Media>

            </Card>
          ))}
        </CardBody>
        <CardFooter className="card-footer-padding">
          <div className="d-flex justify-content-between">
            <div className="text-justified">
              <i
                className="fa fa-info-circle fa-lg "
                style={{ marginRight: 10 }}
              ></i>
              {tot > 0 ? "Total: " + tot + " news " : "No news"}
            </div>
            <div>
              <Link className="text-info" to="/news/all">
                View All
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default News;
