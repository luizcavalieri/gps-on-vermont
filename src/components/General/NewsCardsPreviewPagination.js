import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import newsContent from "../../data/news-content";
import NewsCardsPreview from './NewsCardsPreview';

const NewsCardsPreviewPagination = ({ itemsPerPage }) => {
    const [activePage, setActivePage] = useState(1);
    if (!itemsPerPage) itemsPerPage = 6;

    return (
        <>
            <NewsCardsPreview news={newsContent} start={(activePage - 1) * itemsPerPage} quantity={itemsPerPage} />

            <div className="d-flex justify-content-center" >
                <Pagination
                    hideNavigation={false}
                    activePage={activePage}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={newsContent.length}
                    pageRangeDisplayed={itemsPerPage}
                    onChange={(pageNum => setActivePage(pageNum))}
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </div>
        </>
    )

}

export default NewsCardsPreviewPagination;