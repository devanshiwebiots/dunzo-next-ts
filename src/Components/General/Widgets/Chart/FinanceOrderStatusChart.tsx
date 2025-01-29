import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { FinanceOrderStatusData } from "@/Data/General/Widgets/WidgetsData";
import { CommonCardHeader } from "../Common/CommonCardHeader";

export const FinanceOrderStatusChart = () => {
  return (
    <>
      {FinanceOrderStatusData.map((item) => (
        <Col lg="12" xl={item.xl} className={`box-col-${item.xl}`} key={item.id}>
          <Card>
            <CommonCardHeader title={item.title} />
            <CardBody>
              <div className={`chart-container ${item.chartClass ? item.chartClass : ""}`}>
                <div id="columnchart">
                  <ReactApexChart options={item.chart} series={item.chart.series} type="line" height={350} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
