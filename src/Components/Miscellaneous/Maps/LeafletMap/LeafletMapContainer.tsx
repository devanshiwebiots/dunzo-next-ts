import React from "react";
import { Container, Row } from "reactstrap";
import WorldMap from "./WorldMap";
import USAMap from "./USAMap";
import IndiaMap from "./IndiaMap";
import AustraliaMap from "./AustraliaMap";
import { LeafletMap, Maps } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const LeafletMapContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={LeafletMap} parent={Maps} title={LeafletMap} />
      <Container fluid>
        <Row>
          <WorldMap />
          <USAMap />
          <IndiaMap />
          <AustraliaMap />
        </Row>
      </Container>
    </>
  );
};

export default LeafletMapContainer;
