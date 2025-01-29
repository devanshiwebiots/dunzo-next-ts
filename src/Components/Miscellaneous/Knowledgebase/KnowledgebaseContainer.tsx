"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import KnowledgebaseHelp from "./KnowledgebaseHelp";
import CategoryData from "./CategoryData/CategoryData";
import FeaturesTutorial from "./FeaturesTutorial/FeaturesTutorial";
import ArticleAndVideo from "./ArticleVideo/ArticleAndVideo";
import Articles from "../Faq/Articles";
import { Knowledgebase } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const KnowledgebaseContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Knowledgebase} parent={Knowledgebase} title={Knowledgebase} />
      <Container fluid className="knowledgebase">
        <Row>
          <KnowledgebaseHelp />
          <Articles />
          <CategoryData />
          <FeaturesTutorial />
          <ArticleAndVideo />
        </Row>
      </Container>
    </>
  );
};

export default KnowledgebaseContainer;
