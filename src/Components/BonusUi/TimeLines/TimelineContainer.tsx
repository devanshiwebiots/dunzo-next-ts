"use client";
import { Container, Row } from "reactstrap";
import BasicTimeline from "./BasicTimeline/BasicTimeline";
import HoveringTimeline from "./HoveringTimeline/HoveringTimeline";
import VariationTimeline from "./VariationTimeline/VariationTimeline";
import HorizontalTimeline from "./HorizontalTimeline";
import Timelines from "./Timelines/Timelines";
import { BonusUi, Time, TimelineTitle } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const TimelineContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={TimelineTitle} parent={BonusUi} title={TimelineTitle} />
      <Container fluid>
      <Row>
        <BasicTimeline />
        <HoveringTimeline />
        <VariationTimeline />
        <HorizontalTimeline />
        <Timelines />
      </Row>
    </Container>
    </>
   
  );
};

export default TimelineContainer;