"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { GeneralTitle, WidgetsTitle } from "@/Constant/constant";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { WebCard } from "../../Dashboard/Project/WebCard/WebCard";
import { CategoriesBySales } from "../../Dashboard/Ecommerce/CategoriesBySales/CategoriesBySales";
import { ProjectCreated } from "../../Dashboard/Project/ProjectCreated";
import { BudgetCard } from "../../Dashboard/Project/BudgetCard";
import { OrderOverviewMonthlyInvoiceCards } from "../../Dashboard/Ecommerce/BottomCards/OrderOverviewMonthlyInvoiceCards/OrderOverviewMonthlyInvoiceCards";
import { CustomerDiscountCards } from "./CustomerDiscountCards";
import { TotalEarningCards } from "../../Dashboard/Common/TotalEarningCards";
import { ActiveTasksCard } from "../../Dashboard/Common/ActiveTasksCard";
import { OnlineOrderCards } from "../../Dashboard/Common/OnlineOrderCards";
import { OnlineOrderCardData } from "@/Data/General/Widgets/WidgetsData";

const GeneralWidgetContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={GeneralTitle} parent={WidgetsTitle} title={GeneralTitle} />
      <Container fluid className="general-widget">
        <Row>
          <WebCard />
          <CategoriesBySales />
          <ProjectCreated colClass="col-xl-6 col-lg-6" />
          <BudgetCard colClass="col-xl-3 col-xl-40 col-lg-4 col-md-12 box-col-4" />
          <Col xl="6" className="col-xl-70 box-col-8e">
            <OrderOverviewMonthlyInvoiceCards colClass="col-lg-12 col-md-12 col-sm-6" />
          </Col>
          <CustomerDiscountCards />
          <Col lg="4">
            <TotalEarningCards colClass="col-sm-6" />
            </Col>
          <ActiveTasksCard colClass="col-xl-4 col-xl-40 col-md-6 box-col-4" />
          <OnlineOrderCards data={OnlineOrderCardData} />
        </Row>
      </Container>
    </>
  );
};

export default GeneralWidgetContainer;
