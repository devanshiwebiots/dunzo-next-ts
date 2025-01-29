import { Card, CardBody, Col } from "reactstrap";
import { DynamicBasicTimeline } from "./DynamicBasicTimeline";
import { StaticBasicTimeline } from "./StaticBasicTimeline";
import { BasicTimelines } from "@/Constant/constant";
import { BasicTimeLineData } from "@/Data/BonusUi/Timeline/TimelineData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const BasicTimeline = () => {
  return (
    <Col xl="6" className="notification main-timeline">
      <Card>
        <CommonCardHeader title={BasicTimelines} subTitle={BasicTimeLineData} />
        <CardBody className="dark-timeline mb-0">
          <ul>
            <StaticBasicTimeline />
            <DynamicBasicTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTimeline;
