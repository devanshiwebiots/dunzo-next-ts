"use client"
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { AppsTitle, FileManagerTitle } from "@/Constant/constant";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FileSidebar } from "./FileSidebar/FileSidebar";
import FileContent from "./FileContent/FileContent";

const FileManagerContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={FileManagerTitle} parent={AppsTitle} title={FileManagerTitle} />
      <Container fluid>
        <Row>
          <FileSidebar />
          <Col xl="9" md="12" className="box-col-12">
            <div className="file-content">
              <FileContent />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FileManagerContainer;