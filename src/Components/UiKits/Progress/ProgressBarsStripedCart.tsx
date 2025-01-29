import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ProgressBarsStriped } from "@/Constant/constant";
import { ProgressStripData, ProgressStripList } from "@/Data/Uikits/Progress/ProgressData";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const ProgressBarsStripedCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ProgressBarsStriped} subTitle={ProgressStripData} headClass="pb-0" />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progress color="primary" striped value="10" />
              {ProgressStripList.map(({ color, value }, index) => (
                <Progress color={color} striped value={value} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
