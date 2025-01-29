"use client";
import { Modal, UiKits } from "@/Constant/constant";
import { Container, Row } from "reactstrap";
import BasicModalCart from "./BasicModal/BasicModalCart";
import SizeModalCart from "./SizesModal/SizeModalCart";
import FullScreenModals from "./FullScreenModal/FullScreenModals";
import CenteredModal from "./CenteredModal";
import ToggleBetweenModals from "./ToggleBetweenModals/ToggleBetweenModals";
import StaticBackdropModal from "./StaticBackdropModal/StaticBackdropModal";
import DunzoCustomModals from "./BasicModal/DunzoCustomModals/DunzoCustomModals";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const ModalContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Modal} parent={UiKits} title={Modal} />
      <Container fluid>
        <Row>
          <BasicModalCart />
          <SizeModalCart />
          <FullScreenModals />
          <CenteredModal />
          <ToggleBetweenModals />
          <StaticBackdropModal />
          <DunzoCustomModals />
        </Row>
      </Container>
    </>
  );
};

export default ModalContainer;
