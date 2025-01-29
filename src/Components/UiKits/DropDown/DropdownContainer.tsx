'use client'  
import { Dropdown, UiKits } from "@/Constant/constant";
import { Container, Row } from "reactstrap";
import BasicDropdown from "./BasicDropdown";
import RoundedDropdown from "./RoundedDropdown";
import SplitDropdown from "./SplitDropdown/SplitDropdown";
import HeadingDropdown from "./HeadingDropdown";
import WithInputType from "./WithInputType";
import DarkDropdown from "./DarkDropdown";
import UniqueDropdown from "./UniqueDropdown/UniqueDropdown";
import JustifyContents from "./JustifyContents";
import Alignments from "./Alignments";
import HelperCard from "./HelperCard/HelperCards";
import DividerDropdown from "./DividerDropdown";
import DropdownSizing from "./DropdownSizing";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const DropdownContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Dropdown} parent={UiKits} title={Dropdown} />
      <Container fluid className="ui-dropdown">
        <Row>
          <BasicDropdown />
          <RoundedDropdown />
          <SplitDropdown />
          <HeadingDropdown />
          <WithInputType />
          <DarkDropdown />
          <UniqueDropdown />
          <JustifyContents />
          <Alignments />
          <HelperCard />
          <DividerDropdown/>
          <DropdownSizing/>
        </Row>
      </Container>
    </>
  );
};

export default DropdownContainer;
