import { NumberOfBadge } from "@/Constant/constant";
import { NumberContext, NumberData } from "@/Data/Uikits/TagAndPills/TagAndPillsData";
import React from "react";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const NumberOfBadgeCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={NumberOfBadge} subTitle={NumberData} headClass="pb-0" />
        <CommonTagAndPillsCardBody number={NumberContext} />
      </Card>
    </Col>
  );
};

export default NumberOfBadgeCard;
