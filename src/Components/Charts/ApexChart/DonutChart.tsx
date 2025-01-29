import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { DonutChartTitle } from "@/Constant/constant";
import { DonutChartData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const DonutChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={DonutChartTitle} />
        <CardBody className="apex-chart">
          <div id="donutchart">
            <ReactApexChart options={DonutChartData} series={DonutChartData.series} type="donut" width={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
