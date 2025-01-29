"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ButtonsTitle, DefaultStyleTitle } from "@/Constant/constant";
import { Col, Container, Row } from "reactstrap";
import { AllButtonLists } from "./AllButtonLists";

export const DefaultStyleContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={DefaultStyleTitle} parent={ButtonsTitle} title={DefaultStyleTitle} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <AllButtonLists />
          </Col>
        </Row>
      </Container>
    </>
  );
};
