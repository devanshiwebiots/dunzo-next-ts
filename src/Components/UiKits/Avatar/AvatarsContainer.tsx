"use client";
import { Container, Row } from "reactstrap";
import { SizesCart } from "./SizesCart";
import StatusIndicatorCart from "./StatusIndicator";
import ShapeCart from "./ShapeCart";
import RatioCart from "./RatioCart";
import GroupingCart from "./Grouping";
import { Avatars, UiKits } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const AvatarsContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Avatars} parent={UiKits} title={Avatars} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <SizesCart />
            <StatusIndicatorCart />
            <ShapeCart />
            <RatioCart />
            <GroupingCart />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default AvatarsContainer;