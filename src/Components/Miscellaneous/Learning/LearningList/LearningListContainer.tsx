'use client'
import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainLearningCards from "./MainLearningCards";
import SmallLearningCards from "./SmallLearningCards/SmallLearningCards";
import CourseFilter from "./CourseFilter/CourseFilter";
import { Learning, LearningList } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const LearningListContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={LearningList} parent={Learning} title={LearningList} />
      <Container fluid>
      <Row>
        <Col xl="9" className="xl-60 order-xl-0 order-1 box-col-8">
          <Row>
            <MainLearningCards />
            <SmallLearningCards /> 
          </Row>
        </Col> 
        <Col xl="3" className="xl-40 box-col-4e learning-filter">
          <CourseFilter />
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default LearningListContainer;
