'use client'
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CreateNewProjectForm from "./CreateNewProjectForm";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { Project, ProjectCreate } from "@/Constant/constant";

const NewProjectContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={ProjectCreate} parent={Project} title={ProjectCreate} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CreateNewProjectForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewProjectContainer;
