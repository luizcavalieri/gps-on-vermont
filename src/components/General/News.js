import React from "react";

import {
  CardTitle,
  CardText,
  CardBody,
  Card,
  CardHeader,
  CardFooter
} from "reactstrap";

const News = ({ news }) => {
  let tot = news.length;
  return (
    <>
      <Card className="card-data ">
        <CardHeader className="card-header">
          <i className="fa fa-newspaper fa-lg fa-icon-card-header" ></i>
          Latest News
        </CardHeader>
        <CardBody className="overflow-vertical scrollbar-ripe-malinka">
          {news.map((item, index) => (
            <Card key={index}>
              <CardBody>
                <CardTitle className="card-content-title">{item.title}</CardTitle>
                {/* <CardSubtitle>{item.title}</CardSubtitle> */}
                <CardText>{item.content}</CardText>
              </CardBody>
            </Card>
          ))}
        </CardBody>
        <CardFooter className="card-footer-padding">
          <div className="text-justified">
            <i
              className="fa fa-info-circle fa-lg "
              style={{ marginRight: 10 }}
            ></i>
            {tot > 0 ? "Total: " + tot + " news " : "No news"}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default News;
