import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChartTitle } from "@/Constant/constant";
import { DoughnutData, DoughnutOption } from "@/Data/ChartsData/ChartJsChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const DoughnutChart = () => {
  return (
    <Col xl="6" md="12" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={DoughnutChartTitle} />
        <CardBody className="chart-block chart-vertical-center">
          <Doughnut data={DoughnutData} options={DoughnutOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
