"use client";
import { Container, Row } from "reactstrap";
import DefaultLists from "./DefaultLists";
import ActiveLists from "./ActiveLists";
import FlushLists from "./FlushLists";
import ContextualClasses from "./ContextualClasses";
import HorizontalLists from "./HorizontalLists";
import CustomContentLists from "./CustomContentLists/CustomContentLists";
import ListsWithCheckbox from "./ListsWithCheckbox";
import ListsWithRadios from "./ListsWithRadios";
import ListsWithNumbers from "./ListsWithNumbers";
import JavaScriptBehavior from "./JavaScriptBehavior/JavaScriptBehavior";
import NumberedBadgeLists from "./NumberedBadgeLists";
import DisabledLists from "./DisabledLists";
import ScrollableLists from "./ScrollableLists/ScrollableLists";
import { Lists, UiKits } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const ListContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Lists} parent={UiKits} title={Lists} />
      <Container fluid>
        <Row>
          <DefaultLists />
          <ActiveLists />
          <FlushLists />
          <ContextualClasses />
          <HorizontalLists />
          <CustomContentLists />
          <ListsWithCheckbox />
          <ListsWithRadios />
          <ListsWithNumbers />
          <JavaScriptBehavior />
          <NumberedBadgeLists />
          <DisabledLists />
          <ScrollableLists />
        </Row>
      </Container>
    </>
  );
};

export default ListContainer;
