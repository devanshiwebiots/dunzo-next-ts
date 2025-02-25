import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { CryptoChartsData } from "@/Data/General/Widgets/WidgetsData";
import { CommonCardHeader } from "../Common/CommonCardHeader";

export const CryptoCharts = () => {
  return (
    <>
      {CryptoChartsData.map((item) => (
        <Col lg="12" xl="6" className="col-xl-50" key={item.id}>
          <Card>
            <CommonCardHeader title={item.title} />
            <CardBody>
              <div className={`chart-container ${item.chartClass ? item.chartClass : ""}`}>
                <Row>
                  <Col xs="12">
                    <div id="chart-crypto">
                      <ReactApexChart options={item.chart} series={item.chart.series} type={item.chart.type} height={400} />
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
