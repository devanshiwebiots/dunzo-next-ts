import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Bar } from "react-chartjs-2";
import { BarChartTitle } from "@/Constant/constant";
import { BarChartData, BarChartOptions } from "@/Data/ChartsData/ChartJsChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const BarChart = () => {
  return (
    <Col xl="6" md="12" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BarChartTitle} />
        <CardBody className="chart-block">
          <Bar data={BarChartData} options={BarChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
