"use client";
import { Container, Row } from "reactstrap";
import DefaultBreadcrumb from "./DefaultBreadcrumb";
import DividerBreadcrumb from "./DividerBreadcrumb";
import WithIconsBreadcrumb from "./WithIconsBreadcrumb";
import VariationOfBreadcrumb from "./VariationOfBreadcrumb";
import ColoredBreadcrumb from "./ColoredBreadcrumb/ColoredBreadcrumb";
import { BonusUi, Breadcrumb } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const BreadcrumbContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Breadcrumb} parent={BonusUi} title={Breadcrumb} />
      <Container fluid>
      <Row>
        <DefaultBreadcrumb />
        <DividerBreadcrumb />
        <WithIconsBreadcrumb />
        <VariationOfBreadcrumb />
        <ColoredBreadcrumb />
      </Row>
    </Container>
    </>
    
  );
};

export default BreadcrumbContainer;
