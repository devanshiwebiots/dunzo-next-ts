"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { ButtonGroupTitle, ButtonsTitle } from "@/Constant/constant";
import { Container, Row } from "reactstrap";
import { GroupButtonClass } from "./GroupButtonClass";
import { RadioCheckboxButton } from "./RadioCheckboxButton/RadioCheckboxButton";
import { NestingButton } from "./NestingButton/NestingButton";
import { VerticalButtonGroup } from "./VerticalButtonGroup";

export const ButtonGroupContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={ButtonGroupTitle} parent={ButtonsTitle} title={ButtonGroupTitle} />
      <Container fluid>
        <Row>
          <GroupButtonClass />
          <RadioCheckboxButton />
          <NestingButton />
          <VerticalButtonGroup />
        </Row>
      </Container>
    </>
  );
};
