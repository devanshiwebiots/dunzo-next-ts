'use client'
import React from "react";
import { AddProduct, ECommerce, ProductForm } from "@/Constant/constant";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import ProductBody from "./ProductBody/ProductBody";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const AddProductContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={AddProduct} parent={ECommerce} title={AddProduct} />
      <Container fluid>
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h4>{ProductForm}</h4>
              </CardHeader>
              <CardBody>
                <ProductBody />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProductContainer;
