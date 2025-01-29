import React from "react";
import { Col, Row } from "reactstrap";
import { RecentActivity } from "./RecentActivity/RecentActivity";
import { NewCustomers } from "./NewCustomers";
import { UnlockCard } from "./UnlockCard";
import { SaleStatistic } from "./SaleStatistic";
import { OrderOverviewMonthlyInvoiceCards } from "./OrderOverviewMonthlyInvoiceCards/OrderOverviewMonthlyInvoiceCards";
import { DiscountCard } from "./DiscountCard";

export const BottomCards = () => {
  return (
    <Row className="pe-0 proorder-xl-4">
      <Col xl="5" className="col-xl-100 box-col-12">
        <SaleStatistic />
        <Row>
          <Col xl="12">
            <OrderOverviewMonthlyInvoiceCards />
          </Col>
        </Row>
      </Col>
      <Col xl="7" className="col-xl-100 box-col-12">
        <UnlockCard />
        <Row>
          <Col xl="12">
            <Row>
              <RecentActivity />
              <Col lg="7">
                <Row>
                  <NewCustomers />
                  <Col xl="12" className="pe-0">
                    <DiscountCard />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
