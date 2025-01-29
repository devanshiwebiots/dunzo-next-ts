import React from "react";
import { Card, CardBody, Col, Table } from "reactstrap";
import { RecentOrderTitle } from "@/Constant/constant";
import { MonthlyDropdownList } from "@/Data/General/Dashboard/DashboardData";
import { DropdownWithHeader } from "../../../Common/DropdownWithHeader";
import { RecentOrderTableHead } from "./RecentOrderTableHead";
import { RecentOrderTableBody } from "./RecentOrderTableBody";

export const RecentOrder=()=> {
  return (
    <Col xxl="8" xl="80" md="8" className="box-col-6 proorder-xl-1">
      <Card>
        <DropdownWithHeader headerClass="card-no-border pb-0" heading={RecentOrderTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
        <CardBody className="recent">
          <div className="table-responsive custom-scrollbar">
            <Table className="display" style={{ width: "100%" }}>
              <RecentOrderTableHead />
              <RecentOrderTableBody/>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
