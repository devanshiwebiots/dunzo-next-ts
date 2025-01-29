'use client'
import React from "react";
import { Container, Row } from "reactstrap";
import JavascriptMode from "./JavascriptMode";
import HtmlMode from "./HtmlMode";
import CssMode from "./CssMode";
import JavaMode from "./JavaMode";
import { ACECodeEditor, Editors } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const AceEditorContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={ACECodeEditor} parent={Editors} title={ACECodeEditor} />
      <Container fluid>
        <Row>
          <JavascriptMode />
          <HtmlMode />
          <CssMode />
          <JavaMode />
        </Row>
      </Container>
    </>
  );
};

export default AceEditorContainer;
