import { Card, CardBody, Col } from "reactstrap";
import { TimelineTitle } from "@/Constant/constant";
import AppIdeasTimeline from "./AppIdeasTimeline";
import BlogTimeline from "./BlogTimeline";
import { TimeLineData } from "@/Data/BonusUi/Timeline/TimelineData";
import CarouselTimeline from "./CarouselTimeline";
import AutoTestingTimeline from "./AutoTestingTimeline";
import MeetUpTimeline from "./MeetUpTimeline";
import ResolutionTimeline from "./ResolutionTimeline";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const Timelines = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={TimelineTitle} subTitle={TimeLineData} />
        <CardBody className="default-timeline">
          <section className="cd-container" id="cd-timeline">
            <AppIdeasTimeline />
            <BlogTimeline />
            <CarouselTimeline />
            <AutoTestingTimeline />
            <MeetUpTimeline />
            <ResolutionTimeline />
          </section>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Timelines;
