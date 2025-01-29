import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { CommonChartProps } from "@/Types/ChartType";
import React from "react";
import Chart from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";

export const CommonChart: React.FC<CommonChartProps> = ({ title, bodyClass, colClass, data, divClass }) => {
  return (
    <Col className={colClass ? colClass : "col-sm-12 col-xl-6 box-col-6"}>
      <Card>
        <CommonCardHeader headClass="pb-0" title={title} />
        <CardBody className={`chart-block ${bodyClass ? bodyClass : ""}`}>
          <div className={divClass ? divClass : "chart-overflow"}>
            <Chart width={data?.width} height={data?.height} chartType={data?.chartType} loader={<div>{"Loading Chart"}</div>} data={data?.data} options={data?.option} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
