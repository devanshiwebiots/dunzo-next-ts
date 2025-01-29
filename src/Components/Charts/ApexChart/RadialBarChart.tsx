import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { RadialBarChartTitle } from "@/Constant/constant";
import { RadialBarChartData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const RadialBarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={RadialBarChartTitle} />
        <CardBody>
          <div id="circlechart">
            <ReactApexChart options={RadialBarChartData} series={RadialBarChartData.series} type="radialBar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
