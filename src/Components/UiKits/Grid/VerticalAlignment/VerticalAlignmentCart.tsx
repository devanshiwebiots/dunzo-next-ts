import { VerticalAlignment, VerticalAlignmentClass, VerticalAlignmentValueClass } from "@/Constant/constant";
import { AlignmentData } from "@/Data/Uikits/Grid/GridData";
import { Card, CardBody, Col, Row } from "reactstrap";
import { StaticVerticalAlignment } from "./StaticVerticalAlignment";
import { DynamicVerticalAlignment } from "./DynamicVerticalAlignment";
import GridCommonCardFooter from "../Common/GridCommonCardFooter";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const VerticalAlignmentCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={VerticalAlignment} subTitle={AlignmentData} headClass="pb-0" />
        <CardBody className="grid-showcase mb-0">
          <Row>
            <StaticVerticalAlignment />
            <DynamicVerticalAlignment />
          </Row>
        </CardBody>
        <GridCommonCardFooter className={VerticalAlignmentClass} valueClass={VerticalAlignmentValueClass} />
      </Card>
    </Col>
  );
};

export default VerticalAlignmentCart;
