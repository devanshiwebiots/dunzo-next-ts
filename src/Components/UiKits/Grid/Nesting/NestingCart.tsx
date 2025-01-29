import { Nesting } from "@/Constant/constant";
import { NestingData } from "@/Data/Uikits/Grid/GridData";
import { Card, CardBody, Col, Row } from "reactstrap";
import { NestingCardBody } from "./NestingCardBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const NestingCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={Nesting} subTitle={NestingData} headClass="pb-0" />
        <CardBody className="grid-showcase">
          <Row className="g-3">
            <NestingCardBody />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestingCart;
