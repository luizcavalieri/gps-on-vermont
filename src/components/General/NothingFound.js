import React from "react";
import { Col, Container, Row } from "reactstrap";

const NothingFound = ( ) => {
    return (
        <>
            <Container>
            <Row>
            <Col sm="12" lg="12" md="12" className="">
                <h2 className="title text-muted">Nothing Found</h2>
              </Col>
            </Row>
            </Container>
        </>
    )
}
export default NothingFound;