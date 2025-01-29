import { ProgressWithNumberSteps } from "@/Constant/constant";
import { ProgressNumberData } from "@/Data/Uikits/Progress/ProgressData";
import { Col, Card, CardBody, Progress, Button } from "reactstrap";
import { DynamicProgressWithNumberSteps } from "./DynamicProgressWithNumberSteps";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const ProgressWithNumberStepsCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ProgressWithNumberSteps} subTitle={ProgressNumberData} headClass="pb-0" />
        <CardBody className="mb-1">
          <div className="position-relative m-3 progress-number">
            <Progress value="50" className="progress-wrapper" />
            <Button size="sm" color="primary" className="progress-circle position-absolute top-0 start-0 translate-middle rounded-circle">1</Button>
            <DynamicProgressWithNumberSteps />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}