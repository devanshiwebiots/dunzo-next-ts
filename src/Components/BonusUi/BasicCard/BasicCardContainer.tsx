"use client";
import { Container, Row } from "reactstrap";
import FlatCard from "./FlatCard";
import WithoutShadowCard from "./WithoutShadowCard";
import IconInHeading from "./IconInHeading";
import InfoColorHeader from "./InfoColorHeader";
import InfoColorBody from "./InfoColorBody";
import InfoColorFooters from "./InfoColorFooters";
import DarkColorCard from "./DarkColorCard";
import BasicCard from "@/Components/BonusUi/BasicCard/BasicCard";
import { BasicCards, BonusUi } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const BasicCardContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={BasicCards} parent={BonusUi} title={BasicCards} />
      <Container fluid>
        <Row>
          <BasicCard />
          <FlatCard />
          <WithoutShadowCard />
          <IconInHeading />
          <DarkColorCard />
          <InfoColorHeader />
          <InfoColorBody />
          <InfoColorFooters />
        </Row>
      </Container>
    </>
  );
};

export default BasicCardContainer;
