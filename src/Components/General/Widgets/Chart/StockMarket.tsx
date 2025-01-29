import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { CommonCardHeader } from "../Common/CommonCardHeader";
import { StockMarketTitle } from "@/Constant/constant";
import { OptionsCandlestick } from "@/Data/General/Widgets/WidgetsData";

export const StockMarket = () => {
  return (
    <Col sm="12" className="box-col-12">
      <div className="donut-chart-widget">
        <Card>
          <CommonCardHeader title={StockMarketTitle} headClass="pb-0" />
          <CardBody>
            <div id="chart-widget13">
              <ReactApexChart options={OptionsCandlestick} series={OptionsCandlestick.series} type="line" height={450} />
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};
