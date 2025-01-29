import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { ProgressOptions } from "@/Data/General/Dashboard/DashboardData";
import { ProgressCardTitle } from "@/Constant/constant";

export const ProgressCard = () => {
  return (
    <Col xl="3" lg="3" md="4">
      <Card className="progress-chart">
        <CardBody>
          <div className="progress-card" id="progress-chart">
            <ReactApexChart options={ProgressOptions} series={ProgressOptions.series} type="radialBar" height={300} />
          </div>
          <div className="d-flex">
            <span>{"On Progress"}</span>
            <h6 className="font-primary">{"75%"}</h6>
          </div>
          <h5>{ProgressCardTitle}</h5>
          <p>{"Present eu dolor eu orc vehicula euismod."}</p>
        </CardBody>
      </Card>
    </Col>
  );
};
