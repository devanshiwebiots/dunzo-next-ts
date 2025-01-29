"use client";
import React, { Fragment } from "react";
import { ChartJsChartTitle, ChartsTitle } from "@/Constant/constant";
import { Container, Row } from "reactstrap";
import { BarChart } from "./BarChart";
import { LineGraph } from "./LineGraph";
import { RadarGraph } from "./RadarGraph";
import { LineChart } from "./LineChart";
import { DoughnutChart } from "./DoughnutChart";
import { PolarChart } from "./PolarChart";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

export default function ChartJsChartContainer() {
  return (
    <Fragment>
      <Breadcrumbs pageTitle={ChartJsChartTitle} parent={ChartsTitle} title={ChartJsChartTitle} />
      <Container fluid>
        <Row>
          <BarChart />
          <LineGraph />
          <RadarGraph />
          <LineChart />
          <DoughnutChart />
          <PolarChart />
        </Row>
      </Container>
    </Fragment>
  );
}
