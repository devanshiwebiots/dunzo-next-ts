import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { ColumnChartTitle } from "@/Constant/constant";
import { LineWithAnnotationChartData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const LineChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={ColumnChartTitle} />
        <CardBody>
          <div id="annotationchart">
            <ReactApexChart options={LineWithAnnotationChartData} series={LineWithAnnotationChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
