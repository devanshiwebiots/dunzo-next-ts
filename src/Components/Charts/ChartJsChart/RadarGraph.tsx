import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Radar } from "react-chartjs-2";
import { RadarGraphTitle } from "@/Constant/constant";
import { RadarGraphData, RadarOptions } from "@/Data/ChartsData/ChartJsChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const RadarGraph = () => {
  return (
    <Col xl="6" md="12" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={RadarGraphTitle} />
        <CardBody className="chart-block">
          <Radar data={RadarGraphData} options={RadarOptions} width={724} height={362} />
        </CardBody>
      </Card>
    </Col>
  );
};
