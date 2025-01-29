"use client";
import { Alert, UiKits } from "@/Constant/constant";
import { Container, Row } from "reactstrap";
import { DarkTheme } from "./DarkTheme/DarkTheme";
import LightTheme from "./LightTheme/LightTheme";
import OutlineDarkAndLightAlerts from "./OutlineDarkAndLightAlerts";
import AlertsWithIconsAndTextActions from "./AlertsWithIconsAndTextActions";
import DismissingDarkAlerts from "./DismissingDarkAlerts";
import DismissingLightAlerts from "./DismissingLightAlerts";
import LiveAlert from "./LiveAlert";
import LeftBorderAlert from "./LeftBorderAlert";
import AdditionalContent from "./AdditionalContent";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const AlertContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={Alert} parent={UiKits} title={Alert} />
      <Container fluid>
        <Row>
          <DarkTheme />
          <LightTheme />
          <OutlineDarkAndLightAlerts />
          <AlertsWithIconsAndTextActions />
          <DismissingDarkAlerts />
          <DismissingLightAlerts />
          <LiveAlert />
          <LeftBorderAlert />
          <AdditionalContent />
        </Row>
      </Container>
    </>
  );
};

export default AlertContainer;