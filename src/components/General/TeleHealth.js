import React from 'react';
import { Card, CardFooter, CardImg, CardImgOverlay, CardTitle, Row, Col } from 'reactstrap';
import BookingButton from './BookingButton';
import { Link } from 'react-router-dom';
// import SocialMediaShareBar from './SocialMediaShareBar';


const backImage = "gpv-telehealth-service.jpg";

const TeleHealth = () => {
    return (
        <>
            <Card inverse  >
                <CardImg height="350" src={require(`../../assets/img/${backImage}`)} alt={backImage} />
                <CardImgOverlay style={{ backgroundColor: "#0000001a" }}>
                    <CardTitle tag="h3" className=" text-center ad-card-title " >
                        <div className=" font-weight-bolder telehealth-header" >
                            TeleHEALTH
                        </div>
                    </CardTitle>
                    <CardFooter className=" telehealth-footer" >
                        <Row className="text-center">
                            <Col lg="6" sm="6" xs="6">
                                <BookingButton className="btn-weight" size="sm" />
                            </Col>
                            <Col lg="6" sm="6" xs="6" className={"align-self-center"}>
                                <i
                                    className="fa fa-info-circle fa-lg"
                                    style={{ marginRight: 10 }}
                                ></i>
                                <Link style={{ fontSize: 18 }} className="text-info font-weight-bolder" to="/news/gpv-telehealth-news">check conditions</Link>
                            </Col>
                        </Row>
                    </CardFooter>
                </CardImgOverlay>
            </Card>
        </>
    )
}

export default TeleHealth;