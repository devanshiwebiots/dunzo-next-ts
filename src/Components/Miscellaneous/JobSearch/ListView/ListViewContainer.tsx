"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import ListViewCard from "./ListViewCard";
import CardsPagination from "../Common/CardsPagination";
import Sidebar from "../Common/Sidebar";
import { JobSearch, ListView } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const ListViewContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={ListView} parent={JobSearch} title={ListView} />
      <Container fluid>
        <Row>
          <Col xl="3" className="xl-40 box-col-4e">
            <div className="md-sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col xl="9" className="xl-60 box-col-8">
            <ListViewCard />
            <CardsPagination /> 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListViewContainer;
