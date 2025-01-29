import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { RadioCheckboxData } from "@/Data/ButtonsData/GroupButtonData";
import { CheckBoxButton } from "./CheckBoxButton";
import { RadioBoxButton } from "./RadioBoxButton";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

export const RadioCheckboxButton = () => {
  return (
    <Col xs="12">
      {RadioCheckboxData.map((item, i) => (
        <Card key={i}>
          <CommonCardHeader title={item.title} headClass="card-no-border pb-0" subTitle={item.span} />
          <CardBody className="btn-group-showcase radio-checkbox">
            <Row>{item.subButton.map((item, i) => (item.checkBox ? <CheckBoxButton item={item} key={i} /> : <RadioBoxButton item={item} key={i} />))}</Row>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
};
