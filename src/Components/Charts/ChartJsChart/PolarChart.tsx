import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { PolarArea } from "react-chartjs-2";
import { PolarChartTitle } from "@/Constant/constant";
import { PolarData, PolarOption } from "@/Data/ChartsData/ChartJsChartData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const PolarChart = () => {
  return (
    <Col xl="6" md="12" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={PolarChartTitle} />
        <CardBody className="chart-block chart-vertical-center">
          <PolarArea data={PolarData} options={PolarOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
