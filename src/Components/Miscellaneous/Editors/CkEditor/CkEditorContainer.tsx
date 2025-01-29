import React from "react";
import { Container, Row } from "reactstrap";
import Editor from "./Editor";
import InlineEditor from "./InlineEditor";
import { CkEditor, Editors } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const CkEditorContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={CkEditor} parent={Editors} title={CkEditor} />
      <Container fluid>
        <Row>
          <Editor />
          <InlineEditor />
        </Row>
      </Container>
    </>
  );
};

export default CkEditorContainer;
