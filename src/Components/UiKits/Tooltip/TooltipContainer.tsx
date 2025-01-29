"use client";
import { Tooltip, UiKits } from "@/Constant/constant";
import { Container, Row } from "reactstrap";
import BasicTooltip from "./BasicTooltip/BasicTooltip";
import ColoredTooltip from "./ColoredTooltip";
import TooltipDirections from "./TooltipDirections";
import ElementsWithHoverEffect from "./ElementsWithHoverEffect";
import FilledTooltip from "./FilledTooltip";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const TooltipContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Tooltip} parent={UiKits} title={Tooltip} />
      <Container fluid>
        <Row>
          <BasicTooltip />
          <ColoredTooltip />
          <TooltipDirections />
          <ElementsWithHoverEffect />
          <FilledTooltip />
        </Row>
      </Container>
    </>
  );
};

export default TooltipContainer;