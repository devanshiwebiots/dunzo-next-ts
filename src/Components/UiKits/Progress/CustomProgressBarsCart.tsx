import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { CustomProgressBars, GettingStarted } from "@/Constant/constant";
import { CustomProgressData, CustomProgressList } from "@/Data/Uikits/Progress/ProgressData";
import { Fragment } from "react";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

export const CustomProgressBarsCart = () => {
  return (
    <Card>
      <CommonCardHeader title={CustomProgressBars} subTitle={CustomProgressData} headClass="pb-0"/>
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <h6 className="mb-2">{GettingStarted}</h6>
            <Progress color="dark" value="0" className="text-center mb-4"></Progress>
            {CustomProgressList.map(({ color, value, title, text }, index) => (
              <Fragment key={index}>
                <h6 className="mb-2">{title}</h6>
                <Progress color={color} striped animated value={value} className=" mb-4">
                  {text}
                </Progress>
              </Fragment>
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
