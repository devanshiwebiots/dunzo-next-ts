import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { BarChartTitle } from "@/Constant/constant";
import { BarChartData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const BarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BarChartTitle} />
        <CardBody>
          <div id="basic-bar">
            <ReactApexChart options={BarChartData} series={BarChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
