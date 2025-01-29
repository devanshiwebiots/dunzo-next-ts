import { TotalEarningCardProp } from "@/Types/DashboardType";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { DropdownWithHeader } from "../../../Common/DropdownWithHeader";
import { Due, InvoicesTitle, Overdue } from "@/Constant/constant";
import { MonthlyDropdownList } from "@/Data/General/Dashboard/DashboardData";

export const InvoicesCard: React.FC<TotalEarningCardProp> = ({ colClass }) => {
  return (
    <Col xl="12" className={colClass}>
      <Card className="invoices">
        <DropdownWithHeader headerClass="pb-0" heading={InvoicesTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
        <CardBody>
          <div className="d-flex">
            <div className="flex-shrink-0">
              <h5>{Due}</h5>
              <h3>{"$8,727"}</h3>
            </div>
            <div className="flex-grow-1">
              <h5>{Overdue}</h5>
              <h3>{"$8,727"}</h3>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
