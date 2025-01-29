import React from "react";
import { Col, Row } from "reactstrap";
import { RecentOrder } from "./RecentOrder/RecentOrder";
import { SalesStatistic } from "./SalesStatistic";
import { CustomerCard } from "../../Common/CustomerCard";
import { CustomerCardData } from "@/Data/General/Dashboard/DashboardData";
import { ReviewSlider } from "./ReviewSlider";
import { SalesOverview } from "./SalesOverview";
import { ActiveTasksCard } from "../../Common/ActiveTasksCard";
import { TotalInvestmentAndLeadsStatus } from "./TotalInvestmentAndLeadsStatus";
import { NotificationCard } from "./NotificationCard";
import { StatisticsCard } from "./StatisticsCard";

export const RightBackground = () => {
  return (
    <Col xl="8" className="col-xl-100 box-col-12">
      <Row>
        <RecentOrder />
        <SalesStatistic />
        <CustomerCard data={CustomerCardData} />
        <ReviewSlider />
        <SalesOverview />
        <Row className="proorder-xl-9 pe-0">
          <Col xl="8" md="12" className="col-xl-100">
            <Row>
              <ActiveTasksCard colClass='col-xxl-7 col-xl-50 col-md-6' />
              <TotalInvestmentAndLeadsStatus />
            </Row>
          </Col>
          <Col xl="4" md="12" className="col-xl-100 pe-0">
            <Row>
              <NotificationCard />
              <StatisticsCard />
            </Row>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};
