'use client'
import { Container, Row } from "reactstrap";
import { SimpleAccordion } from "./SimpleAccordion/SimpleAccordion";
import FlushAccordion from "./FlushAccordion/FlushAccordion";
import WithIconsAccordion from "./WithIconsAccordion/WithIconsAccordion";
import OutlineAccordion from "./OutlineAccordion/OutlineAccordion";
import HorizontalAccordion from "./HorizontalAccordion/HorizontalAccordion";
import CollapseAccordion from "./CollapseAccordion/CollapseAccordion";
import MultipleCollapseAccordion from "./MultipleCollapseAccordion";
import { Accordions, UiKits } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const AccordionContainer = () => {
  return (
    <>
    <Breadcrumbs pageTitle={Accordions} parent={UiKits} title={Accordions} />
    <Container fluid>
      <Row>
        <SimpleAccordion />
        <FlushAccordion />
        <MultipleCollapseAccordion />
        <WithIconsAccordion />
        <OutlineAccordion />
        <HorizontalAccordion />
        <CollapseAccordion />
      </Row>
    </Container>
    </>
    
  );
};

export default AccordionContainer;
