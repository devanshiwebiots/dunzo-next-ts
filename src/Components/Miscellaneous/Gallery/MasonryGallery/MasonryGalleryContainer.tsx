import { Gallery, MasonryGallery, MasonryGalleryCap } from "@/Constant/constant";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { MasonryGalleryBody } from "./MasonryGalleryBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const MasonryGalleryContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={MasonryGallery} parent={Gallery} title={MasonryGallery} />
      <Container fluid>
      <Row>
        <Col sm="12" className="box-col-12">
          <Card className="pb-5">
            <CommonCardHeader title={MasonryGalleryCap} />
            <MasonryGalleryBody />
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default MasonryGalleryContainer;
