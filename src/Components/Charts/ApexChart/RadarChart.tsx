import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { RadarChartTitle } from "@/Constant/constant";
import { RadarChartsData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const RadarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={RadarChartTitle} />
        <CardBody>
          <div id="radarchart">
            <ReactApexChart options={RadarChartsData} series={RadarChartsData.series} type="radar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
