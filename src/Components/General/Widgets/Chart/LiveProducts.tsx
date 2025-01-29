import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { CommonCardHeader } from "../Common/CommonCardHeader";
import { LiveProductsTitle } from "@/Constant/constant";
import { LiveProductsOptions } from "@/Data/General/Widgets/WidgetsData";

export const LiveProducts = () => {
  return (
    <Col xl="7" lg="12" className="col-xl-50">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader headClass="pb-0" title={LiveProductsTitle} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <div id="chart-widget6">
                    <ReactApexChart options={LiveProductsOptions} series={LiveProductsOptions.series} type="area" height={320} />
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};
