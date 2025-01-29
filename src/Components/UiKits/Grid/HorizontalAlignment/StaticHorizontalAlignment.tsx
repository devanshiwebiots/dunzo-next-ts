import { Col, Row } from "reactstrap";

export const StaticHorizontalAlignment = () => {
  return (
    <Row className="justify-content-start bg-light">
      <Col xs="5"><span className="text-dark">One column</span></Col>
      <Col xs="5"><span className="text-dark">Two column</span></Col>
    </Row>
  );
};
