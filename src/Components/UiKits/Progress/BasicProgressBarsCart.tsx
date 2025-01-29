import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { BasicProgressBars } from "@/Constant/constant";
import { BasicProgressData, BasicProgressList } from "@/Data/Uikits/Progress/ProgressData";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const BasicProgressBarsCart = () => {
  return (
    <Card>
      <CommonCardHeader title={BasicProgressBars} subTitle={BasicProgressData} headClass="pb-0" />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <Progress value="0" />
            {BasicProgressList.map(({ color, value, text }, index) => (
              <Progress color={color} value={value} key={index}>
                {text && text}
              </Progress>
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
