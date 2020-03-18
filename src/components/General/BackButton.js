import React, { Children } from 'react'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom';


const BackButton = ({ children, className:passedClasses }) => {

    let history = useHistory();
    if(!passedClasses) passedClasses = "btn-round";
    return (
        <>
            <Button  className={passedClasses} color="info" size="lg" onClick={() => history.goBack()}>
                {children}
            </Button>
        </>
    )
}

export default BackButton;
