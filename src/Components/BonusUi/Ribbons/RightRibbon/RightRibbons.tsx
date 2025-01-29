import { Card, CardBody, Col, Row } from "reactstrap";
import { StaticRightRibbons } from "./StaticRightRibbons";
import { DynamicRightRibbons } from "./DynamicLeftRibbons";
import { VariationsOfRightRibbons } from "@/Constant/constant";
import { RightRibbonData } from "@/Data/BonusUi/Ribbons/RibbonsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const  RightRibbons = () => {
  return (
    <Row>
      <Col sm="12" xl="12">
        <Card>
          <CommonCardHeader title={VariationsOfRightRibbons} subTitle={RightRibbonData} />
          <CardBody>
            <Row className="g-3">
              <StaticRightRibbons />
              <DynamicRightRibbons />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default RightRibbons;
