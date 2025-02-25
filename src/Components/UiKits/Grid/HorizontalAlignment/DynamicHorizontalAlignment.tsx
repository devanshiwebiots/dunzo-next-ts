import { HorizontalAlignment } from "@/Data/Uikits/Grid/GridData";
import { Col, Row } from "reactstrap";

export const DynamicHorizontalAlignment = () => {
  return (
    <>
      {HorizontalAlignment.map((item, index) => (
        <Row className={`${item} bg-light`} key={index}>
          <Col xs="5"><span className="text-dark">One column</span></Col>
          <Col xs="5"><span className="text-dark">Two column</span></Col>
        </Row>
      ))}
    </>
  );
};
