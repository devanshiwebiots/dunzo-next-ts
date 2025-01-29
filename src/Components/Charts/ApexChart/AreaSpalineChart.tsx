import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { AreaSpalineChartTitle } from "@/Constant/constant";
import { AreaSpalineCharts } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const AreaSpalineChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={AreaSpalineChartTitle} />
        <CardBody>
          <div id="area-spaline">
            <ReactApexChart options={AreaSpalineCharts} series={AreaSpalineCharts.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
