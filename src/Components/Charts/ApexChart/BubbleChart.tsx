import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { BubbleChartTitle } from "@/Constant/constant";
import { BubbleChartData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const BubbleChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BubbleChartTitle} />
        <CardBody>
          <div id="chart-bubble">
            <ReactApexChart options={BubbleChartData} series={BubbleChartData.series} type="bubble" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
