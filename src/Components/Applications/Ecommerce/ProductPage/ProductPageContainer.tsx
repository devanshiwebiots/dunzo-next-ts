"use client";
import React, { useEffect } from "react";
import { Card, Container, Row } from "reactstrap";
import ImageSlider from "./ImageSlider";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchProductApiData } from "@/Redux/Reducers/ProductSlice";
import ProductDetails from "./ProductDetails/ProductDetails";
import BrandDetail from "./BrandDetail/BrandDetail";
import ClothsDetails from "./ClothsDetails/ClothsDetails";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, ProductPage } from "@/Constant/constant";

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);

  return (
    <>
      <Breadcrumbs pageTitle={ProductPage} parent={ECommerce} title={ProductPage} />
      <Container fluid>
        <div>
          <Row>
            <ImageSlider />
            <ProductDetails />
            <BrandDetail />
          </Row>
          <Card>
            <Row className="product-page-main">
              <ClothsDetails />
            </Row>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ProductPageContainer;
