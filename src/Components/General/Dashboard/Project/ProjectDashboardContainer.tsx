"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { DashboardTitle, ProjectDashboardTitle, ProjectTitle } from "@/Constant/constant";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { WebCard } from "./WebCard/WebCard";
import { ProjectSummary } from "./ProjectSummary/ProjectSummary";
import UpcomingLaunch from "./UpcomingLaunch";
import { DesignCard } from "./DesignCard";
import { BudgetCard } from "./BudgetCard";
import { ProjectCreated } from "./ProjectCreated";
import { TodayTasks } from "./TodayTasks";
import { ProgressCard } from "./ProgressCard";
import { PendingProject } from "./PendingProject";
import { RightBackground } from "./RightBackground/RightBackground";

const ProjectDashboardContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={ProjectDashboardTitle} parent={DashboardTitle} title={ProjectTitle} />
      <Container className="project-dashboard" fluid>
        <Row>
          <Col xl="9" className="col-xl-100 box-col-12">
            <Row>
              <WebCard />
              <ProjectSummary />
              <Col lg="4" md="6" sm="12">
                <Row>
                  <UpcomingLaunch />
                  <DesignCard />
                </Row>
              </Col>
              <BudgetCard colClass='col-xl-4 col-lg-4 col-md-6' />
              <ProjectCreated colClass='col-xl-8 col-lg-8 col-md-6' />
              <TodayTasks />
              <ProgressCard />
              <PendingProject />
            </Row>
          </Col>
          <RightBackground />
        </Row>
      </Container>
    </>
  );
};

export default ProjectDashboardContainer;
