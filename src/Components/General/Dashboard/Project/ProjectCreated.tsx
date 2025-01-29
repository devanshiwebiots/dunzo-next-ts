import React from "react";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { TotalEarningCardProp } from "@/Types/DashboardType";
import { DropdownWithHeader } from "../Common/DropdownWithHeader";
import { ProjectCreatedTitle } from "@/Constant/constant";
import { MonthlyDropdownList, ProjectOptions } from "@/Data/General/Dashboard/DashboardData";

export const ProjectCreated: React.FC<TotalEarningCardProp> = ({ colClass }) => {
  return (
    <div className={colClass}>
      <Card>
        <DropdownWithHeader headerClass="pb-0" heading={ProjectCreatedTitle} dropDownClass="icon-dropdown" dropDownList={MonthlyDropdownList} dropDownIcon={true} />
        <CardBody className="p-0">
          <div id="revenuegrowth">
            <ReactApexChart options={ProjectOptions} series={ProjectOptions.series} type="area" height={355} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
