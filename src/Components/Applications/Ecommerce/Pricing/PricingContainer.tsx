"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import BecomeMember from "./BecomeMember";
import SimplePricingCard from "./SimplePricingCard";
import { ECommerce, Pricing } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const PricingContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Pricing} parent={ECommerce} title={Pricing} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <BecomeMember />
            <SimplePricingCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PricingContainer;
