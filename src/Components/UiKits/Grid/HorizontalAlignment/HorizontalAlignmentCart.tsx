import { HorizontalAlignment, HorizontalAlignmentClass, HorizontalAlignmentValueClass } from "@/Constant/constant";
import { AlignmentData } from "@/Data/Uikits/Grid/GridData";
import { Card, CardBody, Col } from "reactstrap";
import { StaticHorizontalAlignment } from "./StaticHorizontalAlignment";
import GridCommonCardFooter from "../Common/GridCommonCardFooter";
import { DynamicHorizontalAlignment } from "./DynamicHorizontalAlignment";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const HorizontalAlignmentCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={HorizontalAlignment} subTitle={AlignmentData} />
        <CardBody className="grid-showcase grid-align">
          <StaticHorizontalAlignment />
          <DynamicHorizontalAlignment />
        </CardBody>
        <GridCommonCardFooter className={HorizontalAlignmentClass} valueClass={HorizontalAlignmentValueClass} />
      </Card>
    </Col>
  );
};

export default HorizontalAlignmentCart;
