import React, { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { HelpCircle } from "react-feather";
import { LeftBorderAlerts } from "@/Constant/constant";
import { LeftData } from "@/Data/Uikits/Alert/AlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const LeftBorderAlert = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={LeftBorderAlerts} subTitle={LeftData} headClass="pb-0" />
        <CardBody className="live-dark">
          <Alert fade isOpen={visible} color="light-dark" className="text-dark border-left-wrapper" toggle={onDismiss}>
            <HelpCircle />
            <p>You can check in on some of those fields below.</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftBorderAlert;
