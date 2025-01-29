import React, { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { Heart } from "react-feather";
import { DismissingDarkAlert } from "@/Constant/constant";
import { DismissingDarkData } from "@/Data/Uikits/Alert/AlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DismissingDarkAlerts = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={DismissingDarkAlert} subTitle={DismissingDarkData} headClass="pb-0" />
        <CardBody>
          <Alert fade color="secondary" isOpen={visible} toggle={onDismiss}>
            <Heart />
            <p>Check your update! You should check in on some of those fields below.</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingDarkAlerts;
