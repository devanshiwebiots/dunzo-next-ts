"use client";
import { Container, Row } from "reactstrap";
import { HeadingCart } from "./HeadingCard/HeadingCart";
import ColorCart from "./ColorHeading/ColorCart";
import { FontWeightCart } from "./FontWeight/FontWeightCart";
import ListingCard from "./ListingTypography/ListingCard";
import DisplayCart from "./DisplayHeading/DisplayCart";
import InlineTextCart from "./InlineText/InlineTextCart";
import TextColorCart from "./TextColor/TextColorCart";
import BlockQuotCart from "./BlockQuot/BlockQuotCart";
import { Typography, UiKits } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const TypographyContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Typography} parent={UiKits} title={Typography} />
      <Container fluid>
        <Row>
          <HeadingCart />
          <ColorCart />
          <FontWeightCart />
          <ListingCard />
          <DisplayCart />
          <InlineTextCart />
          <TextColorCart />
          <BlockQuotCart />
        </Row>
      </Container>
    </>
  );
};

export default TypographyContainer;