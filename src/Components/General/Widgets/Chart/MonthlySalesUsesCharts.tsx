import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { MonthlySalesUsesChartData } from "@/Data/General/Widgets/WidgetsData";
import { CommonCardHeader } from "../Common/CommonCardHeader";

export const MonthlySalesUsesCharts = () => {
  return (
    <>
      {MonthlySalesUsesChartData.map((item) => (
        <Col lg="12" xl={item.xl} className={`col-xl-50 box-col-${item.xl}`} key={item.id}>
          <div className={`small-chart-widget ${item.divClass ? item.divClass : ""}`}>
            <Card>
              <CommonCardHeader headClass="pb-0" title={item.title} />
              <CardBody>
                <div className="chart-container">
                  <Row>
                    <Col xs="12">
                      <div>
                        <ReactApexChart options={item.chart} series={item.chart.series} type={item.chart.type} height={item.chart.height} />
                      </div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
      ))}
    </>
  );
};
