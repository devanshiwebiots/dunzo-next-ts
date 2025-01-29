import { StylerBorders } from "@/Constant/constant";
import { StyleData } from "@/Data/Uikits/HelperClass/HelperClassData";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BorderRadius } from "./BorderRadius";
import { BorderColors } from "./BorderColor";
import { BorderWidths } from "./BorderWidth";
import { TextColor } from "./TextColors";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const StyleBorderCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={StylerBorders} subTitle={StyleData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <BorderRadius />
            <BorderColors />
            <BorderWidths />
            <TextColor />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StyleBorderCart;
