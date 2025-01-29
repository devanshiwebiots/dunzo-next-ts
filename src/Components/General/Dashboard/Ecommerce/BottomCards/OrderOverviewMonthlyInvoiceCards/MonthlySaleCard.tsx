import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { DropdownWithHeader } from "../../../Common/DropdownWithHeader";
import { TotalEarningCardProp } from "@/Types/DashboardType";
import { Growth, MonthlySaleTitle } from "@/Constant/constant";
import { MonthlyDropdownList, MonthlyGrowthOptions } from "@/Data/General/Dashboard/DashboardData";

export const MonthlySaleCard: React.FC<TotalEarningCardProp> = ({ colClass }) => {
  return (
    <Col xl="12" className={colClass}>
      <Card className="monthly-chart">
        <DropdownWithHeader headerClass="pb-0" heading={MonthlySaleTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
        <CardBody>
          <div className="d-flex">
            <div className="monthly">
              <h5>{Growth}</h5>
              <h3>{"$7,234"}</h3>
            </div>
            <div className="growth" id="monthlychart">
              <ReactApexChart options={MonthlyGrowthOptions} series={MonthlyGrowthOptions.series} type="line" height={120} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
