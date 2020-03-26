import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap';


const NewsCardsPreview = ({ news, start, quantity, bottomComponenet }) => {
    const TEXT_SIZE = 160;


    function compare(a, b) {
        const dateA = a.date;
        const dateB = b.date;

        let comparison = 0;
        if (dateA > dateB) {
            comparison = 1;
        } else if (dateA < dateB) {
            comparison = -1;
        }
        return comparison * -1;
    }

    if (start + quantity > news.length)
        quantity = undefined;  //important for slice to work

    return (
        <>
            <Row >
                {news.sort(compare).slice(start, quantity).map((item, index) => (

                    <Col key={index} lg={"4"} md="6" className={"ml-auto mr-auto"}>
                        <Card >
                            <CardImg src={require(`../../assets/img/${item.img}`)} />
                            <CardBody style={{ height: 200 }}>
                                <CardTitle tag="h4" className="text-muted text-left business-card-title service-preview-card-body-title" >{item.title}</CardTitle>
                                <hr></hr>
                                <CardText tag="h5" className="description text-left text-wrap text-truncate" style={{ height: 125 }}>
                                    {item.contents[0].length > TEXT_SIZE
                                        ? item.contents[0]
                                            .substring(0, TEXT_SIZE)
                                            .concat("...")
                                        : item.contents[0]}

                                </CardText>
                            </CardBody>

                            <CardFooter className="d-flex mt-5" tag="h6">
                                {item.contents[0].length > TEXT_SIZE ||
                                    item.contents.length > 1 ?
                                    (
                                        <>
                                            <section className=" mr-auto text-muted">
                                                <i className=" mr-auto ml-3 pr-1 fa fa-clock"></i>
                                                {item.date}
                                            </section>
                                            <section className=" read-more mr-3 mb-2">

                                                <Link to={`/news/${item.pageLink}`} >
                                                    Read more
                                                <i className="ml-2 fa fa-angle-double-right"></i>
                                                </Link>
                                            </section>
                                        </>
                                    ) :
                                    null
                                }
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
            {bottomComponenet}

        </>
    )

}

export default NewsCardsPreview;