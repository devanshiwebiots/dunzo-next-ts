import React, { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { Bell } from "react-feather";
import { DismissingLightAlert } from "@/Constant/constant";
import { DismissingLightData } from "@/Data/Uikits/Alert/AlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DismissingLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={DismissingLightAlert} subTitle={DismissingLightData} headClass="pb-0" />
        <CardBody>
          <Alert fade color="warning" isOpen={visible} toggle={onDismiss}>
            <Bell />
            <p>Hidden content You should check in on some of those fields below.</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingLightAlerts;
