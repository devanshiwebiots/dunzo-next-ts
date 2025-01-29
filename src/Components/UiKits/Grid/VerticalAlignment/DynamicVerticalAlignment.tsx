import { verticalAlignment } from "@/Data/Uikits/Grid/GridData";
import { Col, Row } from "reactstrap";

export const DynamicVerticalAlignment = () => {
  return (
    <>
      {verticalAlignment.map((item, index) => (
        <Col lg="4" key={index}>
          <Row className={`grid-vertical ${item} m-1 g-2 bg-light`}>
            <Col xs="6"><span>one column</span></Col>
            <Col xs="6"><span>two column</span></Col>
          </Row>
        </Col>
      ))}
    </>
  );
};
