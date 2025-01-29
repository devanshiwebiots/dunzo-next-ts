"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { Container, Row } from "reactstrap";
import { ChartsTitle, GoogleChartTitle } from "@/Constant/constant";
import { ChartLists } from "./ChartLists/ChartLists";

export default function GoogleChartContainer() {
  return (
    <>
      <Breadcrumbs pageTitle={GoogleChartTitle} parent={ChartsTitle} title={GoogleChartTitle} />
      <Container fluid>
        <Row>
          <ChartLists />
        </Row>
      </Container>
    </>
  );
}
