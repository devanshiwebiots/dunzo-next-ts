"use client";
import { Grid, UiKits } from "@/Constant/constant";
import { Container, Row } from "reactstrap";
import NestingCart from "./Nesting/NestingCart";
import OrderCart from "./Order/OrderCart";
import OffsetCart from "./Offset/OffsetCart";
import GridOptionsCart from "./GridOptions/GridOptionsCart";
import GridColumnCart from "./GridColumn";
import VerticalAlignmentCart from "./VerticalAlignment/VerticalAlignmentCart";
import HorizontalAlignmentCart from "./HorizontalAlignment/HorizontalAlignmentCart";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const GridContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Grid} parent={UiKits} title={Grid} />
      <Container fluid>
        <Row>
          <GridOptionsCart />
          <GridColumnCart />
          <VerticalAlignmentCart />
          <HorizontalAlignmentCart />
          <NestingCart />
          <OrderCart />
          <OffsetCart />
        </Row>
      </Container>
    </>
  );
};

export default GridContainer;
