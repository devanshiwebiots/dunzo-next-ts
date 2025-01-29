'use client'
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectListHead } from "./ProjectListHead";
import ProjectListTabContent from "./ProjectListTabContent";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { Project, ProjectLists } from "@/Constant/constant";

const ProjectListContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={ProjectLists} parent={Project} title={ProjectLists} />
      <Container fluid>
        <Row className="project-cards">
          <Col md="12" className="project-list">
            <ProjectListHead />
          </Col>
          <Col sm="12">
            <ProjectListTabContent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectListContainer;
