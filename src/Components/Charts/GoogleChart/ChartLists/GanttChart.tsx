import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import Chart from "react-google-charts";
import { GanttChartTitle } from "@/Constant/constant";
import { GanttChartData, GanttChartOptions } from "@/Data/ChartsData/GoogleChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const GanttChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card className="custom-gantt-chart">
        <CommonCardHeader headClass="pb-0" title={GanttChartTitle} />
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="Gantt" width="100%" height={300} loader={<div>{"Loading Chart"}</div>} data={GanttChartData} options={GanttChartOptions} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
