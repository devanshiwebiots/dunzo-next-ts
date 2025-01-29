"use client";
import { Container } from "reactstrap";
import LeftRibbons from "./LeftRibbons/LeftRibbons";
import RightRibbons from "./RightRibbon/RightRibbons";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { BonusUi, Ribbons } from "@/Constant/constant";

const RibbonsContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Ribbons} parent={BonusUi} title={Ribbons} />
      <Container fluid>
        <LeftRibbons />
        <RightRibbons />
      </Container>
    </>
  );
};

export default RibbonsContainer;
