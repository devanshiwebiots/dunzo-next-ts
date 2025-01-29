import React from "react";
import { Container } from "reactstrap";
import MdeExampleOne from "./MdeExampleOne";
import MdeExampleTwo from "./MdeExampleTwo";
import { Editors, MDEEditor } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const MdeEditorContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={MDEEditor} parent={Editors} title={MDEEditor} />
      <Container fluid>
        <MdeExampleOne />
        <MdeExampleTwo />
      </Container>
    </>
  );
};

export default MdeEditorContainer;
