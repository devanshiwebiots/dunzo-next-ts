import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { PieChartTitle } from "@/Constant/constant";
import { PieChartData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const PieChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={PieChartTitle} />
        <CardBody className="apex-chart">
          <div id="piechart">
            <ReactApexChart options={PieChartData} series={PieChartData.series} type="pie" width={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
