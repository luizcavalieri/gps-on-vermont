import React from 'react'
import { Row, Col } from 'reactstrap';
import ReactLinkify from "react-linkify";
import SocialMediaShareBar from './SocialMediaShareBar';

const NewsDetail = ({ article }) => {
    
    let link = "news/" + article.pageLink;
    const mediaList = ["facebook","twitter","whatsapp","reddit","linkedin","email"];

    const componentDecorator = (href, text, key) => (
        <a href={href} key={key} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );

    return (
        <>
            <div className="article">
                <Row>
                    <Col md="4" xl="4">
                        <div className="justify-content-center">
                            <img className="img-fluid" width={"150%"} src={require(`../../assets/img/news/${article.img}`)} alt={article.title} />
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
                {article.contents.map((paragraph, index) => index > 0 ? (<h5 key={index} className="description text-left">
                    <ReactLinkify componentDecorator={componentDecorator}>
                        {paragraph}
                    </ReactLinkify>
                </h5>) : null)}
                <SocialMediaShareBar shareUrl={link} title={article.title} description={article.contents[0]} media={mediaList} />
            </div>
        </>
    )

}

export default NewsDetail;