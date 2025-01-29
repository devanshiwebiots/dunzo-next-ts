"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import BlogSingle from "./BlogSingle";
import CourseFilter from "../LearningList/CourseFilter/CourseFilter";
import { DetailedCourse, Learning } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const DetailsCourseContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={DetailedCourse} parent={Learning} title={DetailedCourse} />
      <Container fluid>
        <Row>
          <Col xl="9" className="xl-60 order-xl-0 order-1 box-col-8">
            <BlogSingle />
          </Col> 
          <Col xl="3" className="xl-40 box-col-4e learning-filter">
            <CourseFilter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailsCourseContainer;
