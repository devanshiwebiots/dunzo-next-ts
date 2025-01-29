import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { CategoriesSales } from "./CategoriesSales";
import { TotalEarningCardProp } from "@/Types/DashboardType";
import { CategoriesBySalesTitle, TotalEarned } from "@/Constant/constant";
import { EarnedOptions, MonthlyDropdownList } from "@/Data/General/Dashboard/DashboardData";
import { CommonDropdown } from "../../Common/CommonDropdown";

export const CategoriesBySales: React.FC<TotalEarningCardProp> = ({ colClass }) => {
  return (
    <Col xl="3" className={`col-xl-100 box-col-12 ${colClass}`}>
      <Card className="categories-chart">
        <CardHeader className="pb-0">
          <div className="header-top">
            <h4>{CategoriesBySalesTitle}</h4>
            <CommonDropdown dropDownList={MonthlyDropdownList} dropDownIcon={true} dropDownClass="icon-dropdown" />
          </div>
          <CategoriesSales />
        </CardHeader>
        <CardBody className="p-0 pt-1">
          <div className="total-earn">
            <h2>{"$3,512,201"}</h2>
            <h6>{TotalEarned}</h6>
          </div>
          <div className="earned" id="Earned-chart">
            <ReactApexChart options={EarnedOptions} series={EarnedOptions.series} type="area" height={203} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
