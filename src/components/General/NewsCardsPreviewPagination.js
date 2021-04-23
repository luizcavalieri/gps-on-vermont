import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import newsContent from "../../data/news-content";
import NewsCardsPreview from './NewsCardsPreview';
import NothingFound from './NothingFound';

const NewsCardsPreviewPagination = ({ itemsPerPage, searchKeyword }) => {
    const [activePage, setActivePage] = useState(1);
    if (!itemsPerPage) itemsPerPage = 9;
    if (!searchKeyword) searchKeyword = "";
    
    console.log({searchKeyword});
    
    const enabledNews = newsContent.filter( emp => emp.enabled );
    console.log({enabledNews});
    let resultNews;
    
    if(searchKeyword.trim().length > 0) {
        resultNews = enabledNews.filter( news =>
            news.title.toUpperCase().includes(searchKeyword.toUpperCase())
            ||
            news.contents.find( content => content.toUpperCase().includes(searchKeyword.toUpperCase()))
        );
    }else{
        resultNews = enabledNews;
    }
    console.log({resultNews});
    
    return (
        <>
            {resultNews.length > 0 ?
                <>
                    <NewsCardsPreview news={resultNews} start={(activePage - 1) * itemsPerPage} quantity={itemsPerPage} />
                    <div className="d-flex justify-content-center" >
                        <Pagination
                            hideNavigation={false}
                            activePage={activePage}
                            itemsCountPerPage={itemsPerPage}
                            totalItemsCount={resultNews.length}
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
                :
                <>
                    <NothingFound/>
                </>
            }
            

            
        </>
    )

}

export default NewsCardsPreviewPagination;