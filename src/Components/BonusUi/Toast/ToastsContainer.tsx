"use client"
import { Container, Row } from "reactstrap";
import LiveToast from "./LiveToast/LiveToast";
import ColorsSchemes from "./ColorsSchemes";
import StackingToasts from "./StackingToasts";
import TranslucentToasts from "./TranslucentToasts";
import DefaultToast from "./DefaultToast";
import UniqueToast from "./UniqueToast";
import ToastPlacement from "./ToastPlacement/ToastPlacement";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { BonusUi, Toasts } from "@/Constant/constant";

const ToastsContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Toasts} parent={BonusUi} title={Toasts} />
      <Container fluid>
        <Row>
          <LiveToast />
          <ColorsSchemes />
          <StackingToasts />
          <TranslucentToasts />
          <DefaultToast />
          <UniqueToast />
          <ToastPlacement />
        </Row>
      </Container>
    </>
  );
};

export default ToastsContainer;
