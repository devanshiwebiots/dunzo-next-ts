"use client";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import React, { useEffect } from "react";
import { Container } from "reactstrap";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import ProductGrid from "./ProductGrid/ProductGrid";
import { fetchProductApiData } from "@/Redux/Reducers/ProductSlice";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ECommerce, Product } from "@/Constant/constant";

const ProductContainer = () => {
  const { sideBarOn } = useAppSelector((state) => state.filterData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);

  return (
    <>
      <Breadcrumbs pageTitle={Product} parent={ECommerce} title={Product} />
      <Container fluid className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}>
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </>
  );
};

export default ProductContainer;
