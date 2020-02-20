import React from 'react';
import { Col } from 'reactstrap';
import ServiceCard from './ServiceCard';

const ServiceCardPreviewRow = ({ row }) => {
    // console.log(row);
    return (
        <>
            {row.map( ( item, index ) => (
                <Col key={index} xl="4" lg="6" >
                    <ServiceCard service={item} />
                </Col>
            ))}
        </>
    )
}

export default ServiceCardPreviewRow;