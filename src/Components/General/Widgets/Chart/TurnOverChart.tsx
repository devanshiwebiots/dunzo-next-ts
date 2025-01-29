import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { CommonCardHeader } from "../Common/CommonCardHeader";
import { TurnOverTitle } from "@/Constant/constant";
import { TurnOverOptions } from "@/Data/General/Widgets/WidgetsData";

export const TurnOverChart = () => {
  return (
    <Col xl="5" lg="12" className="col-xl-50">
      <Card>
        <CommonCardHeader title={TurnOverTitle} headClass="pb-0" />
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs="12">
                <div id="chart-widget7">
                  <ReactApexChart options={TurnOverOptions} series={TurnOverOptions.series} type="area" height={300} />
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
