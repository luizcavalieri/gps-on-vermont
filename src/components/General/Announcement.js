import React from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import BookingButton from './BookingButton';


const backImage = "gpv-opening-hours.jpg";

const Announcement = () => {
    return (
        <>
            <Card inverse  >
                <CardImg height="350" src={require(`../../assets/img/${backImage}`)} alt={backImage} />
                <CardImgOverlay style={{ backgroundColor: "#3f4144a6"}}>
                    <CardTitle tag="h3" className=" text-center pt-2 ad-card-title">
                        <div className=" font-weight-bolder " >
                            Easter Opening Hours
                            </div>
                        {/* <div className="float-right">8:00 am to 5:20 pm</div> */}
                    </CardTitle>
                    <CardTitle tag="h4" className="pb-1 text-center">
                        GPs on Vermont will be opened over Easter
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Good Friday</div>
                        <div className="float-right">8:00 am to 5:20 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Saturday</div>
                        <div className="float-right">9:00 am to 12:30 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Monday</div>
                        <div className="float-right">8:00 am to 5:20 pm</div>
                    </CardTitle>

                    <CardFooter className="card-footer-padding" >
                        <div className="text-center">
                            <BookingButton />
                            {/* <i
                                className="fa fa-info-circle fa-lg"
                                style={{ marginRight: 10 }}
                            ></i>
                            <Link style={{fontSize: 18}} className="text-primary font-weight-bolder" to="/afterhours-page">Check after hours care</Link> */}
                        </div>
                    </CardFooter>
                </CardImgOverlay>
            </Card>
        </>
    )
}

export default Announcement;