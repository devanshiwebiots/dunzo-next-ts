import { CrossFades } from "@/Constant/constant";
import { CrossFadeData, CrossFadeDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const CrossFade = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={CrossFades} subTitle={CrossFadeData} />
        <CardBody>
          <CommonCarousel data={CrossFadeDataList} control fade interval="2500"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CrossFade;
