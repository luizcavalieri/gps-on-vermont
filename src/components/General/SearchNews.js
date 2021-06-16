import React, { useState } from "react";
import { 
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup } from "reactstrap";
import { Link } from "react-router-dom";


const SearchNews = () => {
    // const idFound = keyword.params.pageLink;


    const [rightFocus, setRightFocus] = React.useState(false);
    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <>
            <InputGroup className={rightFocus ? "input-group-focus" : ""}>
                <Input
                    className="h5 description"
                    placeholder="Search News"
                    type="text"
                    onFocus={() => setRightFocus(true)}
                    onBlur={() => setRightFocus(false)}
                    onChange={(event) => { setSearchKeyword(event.target.value)}} />

                <InputGroupAddon addonType="append">
                    <InputGroupText >
                         {/* onClick={(e) => {console.log('funciono!!!!')} }> */}
                        {searchKeyword.length > 0 ?
                        (
                            <>
                                <Link to={`/news-search/${searchKeyword}`}>
                                    <i className=" mr-auto ml-3 pr-1 fa fa-search"></i>
                                </Link>
                            </>
                        ) :
                        (
                            <>
                                <Link to="/#" onClick ={(e)=> {e.preventDefault()}}>
                                <i className=" mr-auto ml-3 pr-1 fa fa-search"></i>
                                </Link>
                            </>
                        )
                        }

                    </InputGroupText>
                </InputGroupAddon>
                
            </InputGroup>
        </>
    )
};


export default SearchNews;