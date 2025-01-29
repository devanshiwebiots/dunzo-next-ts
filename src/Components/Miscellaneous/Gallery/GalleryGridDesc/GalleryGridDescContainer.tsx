"use client";
import { Gallery, GalleryGridWithDescription, GalleryGridWithDescriptionCap } from "@/Constant/constant";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { DescriptionMyGallery } from "./DescriptionMyGallery";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const GalleryGridDescContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={GalleryGridWithDescription} parent={Gallery} title={GalleryGridWithDescription} />
      <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={GalleryGridWithDescriptionCap} />
            <CardBody className="my-gallery gallery-with-description">
              <Row>
                <DescriptionMyGallery />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    
  );
};

export default GalleryGridDescContainer;
