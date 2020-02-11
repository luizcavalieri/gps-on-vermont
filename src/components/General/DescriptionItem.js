import React from 'react';

const DescriptionItem = ({ desc , includeNewLine, className:passedClasses}) => {

    return (
        <>
            <div className={passedClasses} >{desc}</div>
            {includeNewLine ? (<dir className="new-line"></dir>) : null}
        </>
    );
}

export default DescriptionItem;