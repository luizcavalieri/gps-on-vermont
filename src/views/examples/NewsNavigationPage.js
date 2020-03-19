import React, { useEffect } from 'react'
import OtherNavbar from '../../components/NavBars/OtherNavbar';
import LandingPageHeader from '../../components/Headers/LandingPageHeader';
import BookingButton from '../../components/General/BookingButton';
import { Container } from 'reactstrap';
import NewsCardsPreviewPagination from '../../components/General/NewsCardsPreviewPagination';
import { headerScrolling } from './commons';
import DarkFooter from '../../components/Footers/DarkFooter';

const NewsNavigationPage = () => {

    useEffect(() => {
        headerScrolling();
    });

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
                <div className="section text-center" >
                    <Container className="text-muted">
                        <NewsCardsPreviewPagination itemsPerPage={6} />
                    </Container>
                </div>
            </div>
            <DarkFooter />
        </>
    );

};

export default NewsNavigationPage;