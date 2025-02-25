import React from "react";
import { Col, Container, Row } from "reactstrap";
import NewOrders from "./OrderHistoryData/NewOrders";
import ShippedOrders from "./OrderHistoryData/ShippedOrders";
import CancelledOrders from "./OrderHistoryData/CancelledOrders";
import DataTableOrderHistory from "./OrderHistoryData/DataTableOrderHistory";
import { ECommerce, RecentOrders } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const OrderHistoryContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={RecentOrders} parent={ECommerce} title={RecentOrders} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <NewOrders />
            <ShippedOrders />
            <CancelledOrders />
            <DataTableOrderHistory />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderHistoryContainer;
