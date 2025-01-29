import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { BasicAreaChartTitle } from "@/Constant/constant";
import { BasicAreaChartData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const BasicAreaChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={BasicAreaChartTitle} />
        <CardBody>
          <div id="basic-apex">
            <ReactApexChart options={BasicAreaChartData} series={BasicAreaChartData.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
