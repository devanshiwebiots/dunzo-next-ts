"use client";
import { Container, Row } from "reactstrap";
import { HelperClasses, UiKits } from "@/Constant/constant";
import BorderColorCart from "./BorderColorCart/BorderColorCart";
import FontStyleCart from "./FontStyleCart/FontStyleCart";
import StyleBorderCart from "./StyleBorderCart/StyleBorderCart";
import BorderCart from "./BorderCart/BorderCart";
import BackgroundColorsCart from "./BackgroundColorsCart/BackgroundColorsCart";
import ImagesSizesCart from "./ImagesSizesCart/ImagesSizesCart";
import FontWeightCart from "./FontWeightCart/FontWeightCart";
import TextColorsCart from "./TextColorsCart/TextColorsCart";
import PaddingCart from "./Padding/PaddingCart";
import SidePadding from "./SidePadding/SidePadding";
import MarginCart from "./Margin/MarginCart";
import SideMargin from "./SideMargin/SideMargin";
import FontSizesCart from "./FontSizesCart/FontSizesCart";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";


const HelperClassesContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={HelperClasses} parent={UiKits} title={HelperClasses} />
      <Container fluid>
        <Row>
          <StyleBorderCart />
          <BorderCart />
          <BackgroundColorsCart />
          <BorderColorCart />
          <ImagesSizesCart />
          <FontStyleCart />
          <FontWeightCart />
          <TextColorsCart />
          <PaddingCart/>
          <SidePadding/>
          <MarginCart/>
          <SideMargin />
          <FontSizesCart />
        </Row>
      </Container>
    </>
  );
};

export default HelperClassesContainer;