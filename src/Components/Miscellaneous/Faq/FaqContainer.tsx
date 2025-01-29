"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Articles from "./Articles";
import Questions from "./Questions/Questions";
import FAQFeaturesTutorial from "./FAQFeaturesTutorial/FAQFeaturesTutorial";
import ArticleVideo from "./ArticleVideo/ArticleVideo";
import { FAQ } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const FaqContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={FAQ} parent={FAQ} title={FAQ} />
      <Container fluid>
        <div className="faq-wrap">
          <Row>
            <Articles />
            <Questions />
            <FAQFeaturesTutorial />
            <ArticleVideo />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default FaqContainer;
