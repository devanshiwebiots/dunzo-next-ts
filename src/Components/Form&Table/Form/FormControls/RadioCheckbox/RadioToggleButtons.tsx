import React, { Fragment } from "react";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { RadioChecked, RadioToggleButton } from "@/Constant/constant";
import { RadioToggleData, RadioToggleDataList } from "@/Data/Form&Table/Form/FormData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const RadioToggleButtons = () => {
  return (
    <Col md="6">
      <Card className="radio-toggle-custom">
        <CommonCardHeader title={RadioToggleButton} subTitle={RadioToggleData} headClass="pb-0" />
        <CardBody className="common-flex main-radio-toggle">
          <Input className="btn-check radio-light-secondary" id="option1" type="radio" name="options" defaultChecked />
          <Label className="btn list-light-secondary" htmlFor="option1" check>
            {RadioChecked}
          </Label>
          {RadioToggleDataList.map(({ id, text, disabled }, index) => (
            <Fragment key={index}>
              <Input className="btn-check radio-light-secondary" id={id} type="radio" name="options" disabled={disabled} />
              <Label className="btn list-light-secondary" htmlFor={id} check>
                {text}
              </Label>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadioToggleButtons;
