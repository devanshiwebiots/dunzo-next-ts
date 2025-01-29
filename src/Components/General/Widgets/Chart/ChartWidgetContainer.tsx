"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ChartTitle, WidgetsTitle } from "@/Constant/constant";
import React from "react";
import { Container, Row } from "reactstrap";
import { ChartWidgetTop } from "./ChartWidgetTop";
import { ProjectCreated } from "./ProjectCreated";
import { SalesOverview } from "./SalesOverview";
import { MonthlyHistory } from "./MonthlyHistory";
import { LiveProducts } from "./LiveProducts";
import { TurnOverChart } from "./TurnOverChart";
import { CryptoCharts } from "./CryptoCharts";
import { StockMarket } from "./StockMarket";
import { FinanceOrderStatusChart } from "./FinanceOrderStatusChart";
import { MonthlySalesUsesCharts } from "./MonthlySalesUsesCharts";

const ChartWidgetContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={ChartTitle} parent={WidgetsTitle} title={ChartTitle} />
      <Container fluid>
        <ChartWidgetTop />
        <Row>
          <ProjectCreated />
          <SalesOverview />
          <MonthlyHistory />
        </Row>
        <Row>
          <LiveProducts />
          <TurnOverChart />
          <CryptoCharts />
        </Row>
        <Row>
          <StockMarket />
          <FinanceOrderStatusChart />
          <MonthlySalesUsesCharts />
        </Row>
      </Container>
    </>
  );
};

export default ChartWidgetContainer;
