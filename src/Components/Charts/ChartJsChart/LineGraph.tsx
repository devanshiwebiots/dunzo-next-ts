import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import { LineGraphTitle } from "@/Constant/constant";
import { LineGraphData, LineGraphOptions } from "@/Data/ChartsData/ChartJsChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const LineGraph = () => {
  return (
    <Col xl="6" md="12" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={LineGraphTitle} />
        <CardBody className="chart-block">
          <Line data={LineGraphData} options={LineGraphOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
