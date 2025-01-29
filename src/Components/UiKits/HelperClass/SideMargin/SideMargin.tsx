import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { MarginLeft, OnlyOneSideMargin, PaddingLeft } from "@/Constant/constant";
import { SideMarginData, SideMarginDetails, SideMargins } from "@/Data/Uikits/HelperClass/HelperClassData";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const SideMargin = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={OnlyOneSideMargin} subTitle={SideMarginData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 alert-light-light dark-helper">
                <h6 className="mb-3">{MarginLeft}</h6>
                <div className="common-p-box">
                  {SideMargins.map((value, index) => (<span key={index}>{value}</span>))}
                </div>
              </div>
            </Col>
            {SideMarginDetails.map((item, index) => (
              <Col xxl="3" sm="6" key={index}>
                <div className="border-wrapper h-100 alert-light-light dark-helper">
                  <h6 className="mb-3">{item.title}</h6>
                  <div className="common-p-box">{item.direction.map((data, index) => (<span key={index}>{data}</span>))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SideMargin;
