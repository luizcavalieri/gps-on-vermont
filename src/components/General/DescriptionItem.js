import React from 'react';

const DescriptionItem = ({ item , className:passedClasses}) => {

    return (
        <>
            <div className={passedClasses} >{item}</div>
        </>
    );
}

export default DescriptionItem;