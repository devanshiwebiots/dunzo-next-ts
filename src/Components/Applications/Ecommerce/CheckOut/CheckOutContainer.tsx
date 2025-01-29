'use client'
import { BillingDetails, CheckOutTitle, ECommerce } from "@/Constant/constant";
import React from "react";
import { Card, CardBody, Container, Row } from "reactstrap";
import CheckoutTableData from "./CheckoutTableData";
import ProductCheckout from "./ProductCheckout/ProductCheckout";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const CheckOutContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={CheckOutTitle} parent={ECommerce} title={CheckOutTitle} />
      <Container fluid>
        <Card className="checkout">
          <CommonCardHeader title={BillingDetails} />
          <CardBody>
            <Row>
              <CheckoutTableData />
              <ProductCheckout />
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default CheckOutContainer;
