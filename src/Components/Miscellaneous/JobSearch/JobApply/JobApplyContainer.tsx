"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../Common/Sidebar";
import JobApply from "./JobApply";
import { Apply, JobSearch } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const JobApplyContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Apply} parent={JobSearch} title={Apply} />
      <Container fluid>
        <Row>
          <Col xl="3" className="xl-40 box-col-4e">
            <div className="md-sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col xl="9" className="xl-60 box-col-8">
            <JobApply />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobApplyContainer;
