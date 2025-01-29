"use client";
import { Popover, UiKits } from "@/Constant/constant";
import { Container, Row } from "reactstrap";
import BasicPopover from "./BasicPopover";
import PopoverDirection from "./PopoverDirection";
import PopoverOffset from "./PopoverOffset";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const PopoverContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Popover} parent={UiKits} title={Popover} />
      <Container fluid>
        <Row>
          <BasicPopover />
          <PopoverDirection />
          <PopoverOffset />
        </Row>
      </Container>
    </>
  );
};

export default PopoverContainer;
