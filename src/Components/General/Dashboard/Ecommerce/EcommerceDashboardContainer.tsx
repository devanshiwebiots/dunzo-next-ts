'use client'
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { DashboardTitle, ECommerceTitle, EcommerceDashboardTitle } from "@/Constant/constant";
import React from "react";
import { Container, Row } from "reactstrap";
import { OnlineOrderCards } from "../Common/OnlineOrderCards";
import { OnlineOrderCardData } from "@/Data/General/Dashboard/DashboardData";
import { FeedbackCard } from "./FeedbackCard";
import { SalesEventCalendar } from "./SalesEventCalendar";
import { SaleTopCountries } from "./SaleTopCountries";
import { CategoriesBySales } from "./CategoriesBySales/CategoriesBySales";
import { BottomCards } from "./BottomCards/BottomCards";
import { RecentOrder } from "./RecentOrder/RecentOrder";

const EcommerceDashboardContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={EcommerceDashboardTitle} parent={DashboardTitle} title={ECommerceTitle} />
      <Container fluid className="ecommerce-dashboard">
        <Row className="bg-light p-4 mb-4">
          <OnlineOrderCards data={OnlineOrderCardData} />
          <FeedbackCard />
          <SalesEventCalendar />
        </Row>
        <Row>
          <SaleTopCountries />
          <RecentOrder />
          <CategoriesBySales colClass="proorder-xl-1" />
          <BottomCards />
        </Row>
      </Container>
    </>
  );
};

export default EcommerceDashboardContainer;
