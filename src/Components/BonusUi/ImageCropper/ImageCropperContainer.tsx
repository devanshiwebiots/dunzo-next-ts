"use client";
import { BonusUi, ImageCropper } from "@/Constant/constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ImageCropperBody from "./ImageCropperBody";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const ImageCropperContainer=()=> {
  return (
    <>
      <Breadcrumbs pageTitle={ImageCropper} parent={BonusUi} title={ImageCropper} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={ImageCropper} />
              <CardBody>
                <ImageCropperBody />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ImageCropperContainer;