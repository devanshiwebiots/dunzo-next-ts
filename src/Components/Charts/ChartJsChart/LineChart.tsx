import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import { LineChartTitle } from "@/Constant/constant";
import { LineChartData, LineChartOption } from "@/Data/ChartsData/ChartJsChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const LineChart = () => {
  return (
    <Col xl="6" md="12" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={LineChartTitle} />
        <CardBody className="chart-block">
          <Line data={LineChartData} options={LineChartOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
