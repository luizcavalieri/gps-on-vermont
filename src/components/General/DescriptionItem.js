import React from 'react';

const DescriptionItem = ({ desc , className:passedClasses}) => {

    return (
        <>
            <div className={passedClasses} >{desc}</div>
        </>
    );
}

export default DescriptionItem;