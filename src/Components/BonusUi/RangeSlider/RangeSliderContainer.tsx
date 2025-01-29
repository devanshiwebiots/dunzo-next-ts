"use client";
import { Container, Row } from "reactstrap";
import DefaultRangeSlider from "./DefaultRangeSlider/DefaultRangeSlider";
import MinMaxValue from "./MinMaxValue/MinMaxValue";
import NegativeValue from "./NegativeValue/NegativeValue";
import Disabled from "./Disabled/Disabled";
import Prefix from "./Prefix/Prefix";
import FormateLabel from "./FormateLabel/FormateLabel";
import { BonusUi, RangeSlider } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const RangeSliderContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={RangeSlider} parent={BonusUi} title={RangeSlider} />
      <Container fluid>
      <Row>
        <DefaultRangeSlider />
        <MinMaxValue />
        <NegativeValue />
        <Disabled />
        <Prefix />
        <FormateLabel />
      </Row>
    </Container>
    </>
   
  );
};

export default RangeSliderContainer;
