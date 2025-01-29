'use client'
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../Common/Sidebar";
import CardsClass from "./CardsClass";
import CardsPagination from "../Common/CardsPagination";
import { CardsView, JobSearch } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const CardViewContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={CardsView} parent={JobSearch} title={CardsView} />
      <Container fluid>
        <Row>
          <Col xxl="3" xl="4" className="box-col-4e">
            <div className="md-sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col xxl="9" xl="8" className="box-col-8">
            <Row>
              <CardsClass />
              <CardsPagination />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardViewContainer;
