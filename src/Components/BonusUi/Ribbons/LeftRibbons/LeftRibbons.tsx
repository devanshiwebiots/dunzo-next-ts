import { Card, CardBody, Col, Row } from "reactstrap";
import { StaticLeftRibbons } from "./StaticLeftRibbons";
import { DynamicLeftRibbons } from "./DynamicLeftRibbons";
import { LeftRibbonsData } from "@/Data/BonusUi/Ribbons/RibbonsData";
import { VariationsOfLeftRibbons } from "@/Constant/constant";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const LeftRibbons = () => {
  return (
    <Row>
      <Col sm="12" xl="12">
        <Card>
          <CommonCardHeader title={VariationsOfLeftRibbons} subTitle={LeftRibbonsData} />
          <CardBody>
            <Row className="g-3">
              <StaticLeftRibbons />
              <DynamicLeftRibbons />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default LeftRibbons;
