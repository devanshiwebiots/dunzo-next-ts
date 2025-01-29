import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { MixedChartTitle } from "@/Constant/constant";
import { MixedChartData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const MixedChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={MixedChartTitle} />
        <CardBody>
          <div id="mixedchart">
            <ReactApexChart options={MixedChartData} series={MixedChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
