import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { DropdownWithHeader } from "../../Common/DropdownWithHeader";
import { SaleStatisticTitle } from "@/Constant/constant";
import { MonthlyDropdownList, TotalProjectOptions } from "@/Data/General/Dashboard/DashboardData";

export const SaleStatistic = () => {
  return (
    <Row>
      <Col xl="12">
        <Card className="categories-chart">
          <DropdownWithHeader headerClass="pb-0" heading={SaleStatisticTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
          <CardBody className="p-0">
            <div id="total-project">
              <ReactApexChart options={TotalProjectOptions} series={TotalProjectOptions.series} type="bar" height={320} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
