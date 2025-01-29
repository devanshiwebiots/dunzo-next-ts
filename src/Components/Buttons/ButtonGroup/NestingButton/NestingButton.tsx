import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { NestingTitle } from "@/Constant/constant";
import { NestingButton1 } from "./NestingButton1";
import { NestingButtonIcons } from "./NestingButtonIcons";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { NestingButtonSpan } from "@/Data/ButtonsData/GroupButtonData";

export const NestingButton = () => {
  return (
    <Col lg="6">
      <Card className="height-equal">
        <CommonCardHeader headClass="card-no-border pb-0" title={NestingTitle} subTitle={NestingButtonSpan} />
        <CardBody className="btn-group-wrapper">
          <NestingButton1 />
          <NestingButtonIcons />
        </CardBody>
      </Card>
    </Col>
  );
};
