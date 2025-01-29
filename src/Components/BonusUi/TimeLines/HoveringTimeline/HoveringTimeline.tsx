import { Card, CardBody, Col } from "reactstrap";
import { HoveringTimelines } from "@/Constant/constant";
import { MeetupHoveringTimeline } from "./MeetupHoveringTimeline";
import { InterviewHoveringTimeline } from "./InterviewHoveringTimeline";
import { AnnualFunctionHoveringTimeline } from "./AnnualFunctionHoveringTimeline";
import { HoveringTimeLineData } from "@/Data/BonusUi/Timeline/TimelineData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const HoveringTimeline = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={HoveringTimelines} subTitle={HoveringTimeLineData} />
        <CardBody className="dark-timeline mb-4">
          <ul className="square-timeline simple-list">
            <AnnualFunctionHoveringTimeline />
            <InterviewHoveringTimeline />
            <MeetupHoveringTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HoveringTimeline;