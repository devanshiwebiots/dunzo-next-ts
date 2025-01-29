"use client";
import { Progress, UiKits } from "@/Constant/constant";
import { Container, Row, Col } from "reactstrap";
import { BasicProgressBarsCart } from "./BasicProgressBarsCart";
import { ProgressBarsStripedCart } from "./ProgressBarsStripedCart";
import { ProgressBarsAnimatedCart } from "./ProgressBarsAnimatedCart";
import { MultipleBarsCart } from "./MultipleBarsCart";
import { ProgressWithNumberStepsCart } from "./ProgressWithNumberSteps/ProgressWithNumberStepsCart";
import { CustomProgressBarsCart } from "./CustomProgressBarsCart";
import { SmallProgressBarsCart } from "./SmallProgressBarsCart";
import { LargeProgressBarsCart } from "./LargeProgressBarsCart";
import { CustomHeightProgressBarsCart } from "./CustomHeightProgressBarsCart";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const ProgressContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Progress} parent={UiKits} title={Progress} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <BasicProgressBarsCart />
            <Row>
              <ProgressBarsStripedCart />
              <ProgressBarsAnimatedCart />
            </Row>
            <Row>
              <MultipleBarsCart />
              <ProgressWithNumberStepsCart />
            </Row>
            <CustomProgressBarsCart />
            <Row>
              <SmallProgressBarsCart />
              <LargeProgressBarsCart />
            </Row>
            <CustomHeightProgressBarsCart />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProgressContainer;
