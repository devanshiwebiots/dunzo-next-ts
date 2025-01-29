import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { CandlestickChartTitle } from "@/Constant/constant";
import { CandleStickChartData } from "@/Data/ChartsData/ApexChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const CandlestickChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={CandlestickChartTitle} />
        <CardBody>
          <div id="candlestick">
            <ReactApexChart options={CandleStickChartData} series={CandleStickChartData.series} type="candlestick" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
