import { Card, CardBody, Col } from "reactstrap";
import { VariationTimelines } from "@/Constant/constant";
import { DynamicVariationTimeline } from "./DynamicVariationTimeline";
import { StaticVariationTimeline } from "./StaticVariationTimeline";
import { VariationTimeLineData } from "@/Data/BonusUi/Timeline/TimelineData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const VariationTimeline = () => {
  return (
    <Col xxl="4" xl="5" className="notification box-col-12">
      <Card>
        <CommonCardHeader title={VariationTimelines} subTitle={VariationTimeLineData} />
        <CardBody className="dark-timeline">
          <ul className="simple-list">
            <StaticVariationTimeline/>
            <DynamicVariationTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationTimeline;
