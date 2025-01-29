"use client"
import { Col, Container, Row } from "reactstrap";
import DisabledTree from "./DisabledTree";
import BasicTrees from "./BasicTrees";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { BonusUi, TreeView } from "@/Constant/constant";

const TreeViewContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={TreeView} parent={BonusUi} title={TreeView} />
      <Container fluid>
        <Row>
          <Col md="6">
            <BasicTrees />
          </Col>
          <Col md="6">
            <DisabledTree />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TreeViewContainer;
