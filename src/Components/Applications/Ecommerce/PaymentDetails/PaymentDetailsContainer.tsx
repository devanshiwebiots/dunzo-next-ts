import React from "react";
import { Container, Row } from "reactstrap";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import CodForm from "./CodForm";
import EmiForm from "./EmiForm";
import NetBanking from "./NetBanking";
import { ECommerce, PaymentDetails } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const PaymentDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={PaymentDetails} parent={ECommerce} title={PaymentDetails} />
      <Container fluid className="credit-card">
        <Row>
          <CreditCard />
          <DebitCard />
          <CodForm />
          <EmiForm />
          <NetBanking />
        </Row>
      </Container>
    </>
  );
};

export default PaymentDetailsContainer;
