"use client";
import { Container, Row } from "reactstrap";
import ImagePreview from "./ImagePreview";
import SingleFileUpload from "./SingleFileUpload";
import MultiFileUpload from "./MultiFileUpload";
import DefaultDropzone from "./DefaultDropzone";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { BonusUi, Dropzone } from "@/Constant/constant";

const DropzoneCOntainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Dropzone} parent={BonusUi} title={Dropzone} />
      <Container fluid>
        <Row>
          <DefaultDropzone />
          <ImagePreview />
          <SingleFileUpload />
          <MultiFileUpload />
        </Row>
      </Container>
    </>
  );
};

export default DropzoneCOntainer;
