import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { MultipleBars } from "@/Constant/constant";
import { MultipleDta, MultipleList } from "@/Data/Uikits/Progress/ProgressData";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const MultipleBarsCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={MultipleBars} subTitle={MultipleDta} headClass="pb-0" />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progress multi>
                <Progress color="primary" bar value="30" />
                <Progress color="secondary" bar value="20" />
                <Progress color="success" bar value="15" />
              </Progress>
              <Progress multi>
                {MultipleList.map(({ color, value }, index) => (
                  <Progress color={color} bar value={value} key={index} />
                ))}
              </Progress>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
