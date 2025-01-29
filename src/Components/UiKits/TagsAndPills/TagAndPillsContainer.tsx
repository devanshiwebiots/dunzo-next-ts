'use client'
import { TagAndPills, UiKits } from "@/Constant/constant";
import { Container, Row } from "reactstrap";
import BadgesContextualVariationsCart from "./BadgesContextualVariationsCart";
import PillsContextualVariationsCart from "./PillsContextualVariationsCart";
import NumberOfBadgeCard from "./NumberOfBadgeCard";
import NumberOfPillsTagCart from "./NumberOfPillsTagCart";
import BadgeTagsWithIconsCart from "./BadgeTagsWithIconsCart";
import RoundedPillsWithIconsCart from "./RoundedPillsWithIconsCart";
import BadgeHeadingsExampleCart from "./BadgeHeadingsExampleCart";
import BadgesAsPartButtonsCart from "./BadgesAsPartButtons/BadgesAsPartButtonsCart";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const TagAndPillsContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={TagAndPills} parent={UiKits} title={TagAndPills} />
      <Container fluid>
        <Row>
          <BadgesContextualVariationsCart />
          <PillsContextualVariationsCart />
          <NumberOfBadgeCard />
          <NumberOfPillsTagCart />
          <BadgeTagsWithIconsCart />
          <RoundedPillsWithIconsCart />
          <BadgeHeadingsExampleCart />
          <BadgesAsPartButtonsCart />
        </Row>
      </Container>  
    </>
  );
};

export default TagAndPillsContainer;