import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import Chart from "react-google-charts";
import { ComboChartTitle } from "@/Constant/constant";
import { ComboChartData, ComboChartOption } from "@/Data/ChartsData/GoogleChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const ComboChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={ComboChartTitle} />
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart width={"100%"} height={500} chartType={"ComboChart"} loader={<div>{"Loading Chart"}</div>} data={ComboChartData} options={ComboChartOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
