"use client";
import { Container, Row } from "reactstrap";
import SlidesOnly from "./SlidesOnly";
import WithControls from "./WithControls";
import AutoPlayVariant from "./AutoPlayVariant";
import WithIndicators from "./WithIndicators";
import WithCaptions from "./WithCaptions";
import CrossFade from "./CrossFade";
import IndividualInterval from "./IndividualInterval/IndividualInterval";
import DisableTouchSwiping from "./DisableTouchSwiping";
import DarkVariant from "./DarkVariant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { BonusUi, ReactstrapCarousel } from "@/Constant/constant";

const CarouselContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={ReactstrapCarousel} parent={BonusUi} title={ReactstrapCarousel} />
      <Container fluid>
        <Row>
          <SlidesOnly />
          <WithControls />
          <AutoPlayVariant />
          <WithIndicators />
          <WithCaptions />
          <CrossFade />
          <IndividualInterval />
          <DisableTouchSwiping />
          <DarkVariant />
        </Row>
      </Container>
    </>
  );
};

export default CarouselContainer;
