import { HoverData } from "@/Data/Miscellaneous/Gallery/GalleryData";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { ImageHoverEffectsCardBody } from "./ImageHoverEffectsCardBody";
import { Gallery, ImageHoverEffects } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const HoverEffectContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={ImageHoverEffects} parent={Gallery} title={ImageHoverEffects} />
      <Container fluid>
        {HoverData.map((data, index) => (
          <Row key={index}>
            <Col sm="12">
              <Card>
                <CommonCardHeader title={`Hover Effect ${data}`} />
                <ImageHoverEffectsCardBody data={data} />
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default HoverEffectContainer;
