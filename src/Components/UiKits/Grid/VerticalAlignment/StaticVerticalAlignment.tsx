import { Col, Row } from "reactstrap";

export const StaticVerticalAlignment = () => {
  return (
    <Col lg="4">
      <Row className="grid-vertical align-items-start m-1 g-2 bg-light">
        <Col xs="6"><span>one column</span></Col> 
        <Col xs="6"><span>two column</span></Col>
      </Row>
    </Col>
  );
};
