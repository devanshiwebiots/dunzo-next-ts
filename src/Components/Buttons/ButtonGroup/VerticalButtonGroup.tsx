import React from "react";
import { Button, ButtonGroup, Card, CardBody, Col } from "reactstrap";
import { ButtonHeading, VerticalTitle } from "@/Constant/constant";
import { CommonDropdown } from "../Common/CommonDropdown";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { VerticalText } from "@/Data/ButtonsData/GroupButtonData";

export const VerticalButtonGroup = () => {
  return (
    <Col lg="6">
      <Card className="height-equal">
        <CommonCardHeader headClass="card-no-border pb-0" title={VerticalTitle} subTitle={VerticalText} />
        <CardBody className="btn-group-wrapper">
          <ButtonGroup vertical>
            <Button color="primary">{ButtonHeading}</Button>
            <Button color="secondary">{ButtonHeading}</Button>
            <ButtonGroup>
              <CommonDropdown color="success" />
            </ButtonGroup>
            <Button color="info" className="b-r-0">
              {ButtonHeading}
            </Button>
            <Button color="warning" className="b-r-0">
              {ButtonHeading}
            </Button>
            <CommonDropdown color="danger" className="b-r-0" />
            <CommonDropdown color="light" />
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
