import React from "react";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { MonthlySaleCard } from "./MonthlySaleCard";
import { InvoicesCard } from "./InvoicesCard";
import { DropdownWithHeader } from "../../../Common/DropdownWithHeader";
import { OrderOverviewTitle, TotalRevenue } from "@/Constant/constant";
import { MonthlyDropdownList, OrderOverviewData } from "@/Data/General/Dashboard/DashboardData";
import { TotalEarningCardProp } from "@/Types/DashboardType";

export const OrderOverviewMonthlyInvoiceCards: React.FC<TotalEarningCardProp> = ({ colClass }) => {
  return (
    <Row>
      <Col md="7">
        <Card className="order-overview">
          <DropdownWithHeader headerClass="pb-0" heading={OrderOverviewTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
          <CardBody>
            <div className="d-flex">
              <h2 className="me-2">{"($3,512,201)"}</h2>
              <h6>{TotalRevenue}</h6>
            </div>
            {OrderOverviewData.map((item) => (
              <div className="total-revenue" key={item.id}>
                <div className="d-flex">
                  <h5 className="me-2">{item.value}</h5>
                  <span>({item.text})</span>
                </div>
                <Progress value={item.value} color={item.color} />
              </div>
            ))}
          </CardBody>
        </Card>
      </Col>
      <Col md="5">
        <Row>
          <MonthlySaleCard colClass={colClass} />
          <InvoicesCard colClass={colClass} />
        </Row>
      </Col>
    </Row>
  );
};
