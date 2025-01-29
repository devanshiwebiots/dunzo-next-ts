import { Card, CardBody, Col, Row } from "reactstrap";
import { AdditiveBorders } from "./AdditiveBorder";
import { SubtractiveBorders } from "./SubtractiveBorder";
import { AdditiveRadius } from "./AdditiveRadius";
import { StylesInBorders } from "@/Constant/constant";
import { BorderData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const BorderCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={StylesInBorders} subTitle={BorderData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <AdditiveBorders />
            <SubtractiveBorders />
            <AdditiveRadius />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderCart;
