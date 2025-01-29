import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { Padding } from "@/Constant/constant";
import { PaddingCartData, PaddingCartDetail } from "@/Data/Uikits/HelperClass/HelperClassData";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const PaddingCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={Padding} subTitle={PaddingCartData} headClass="pb-0" />
        <CardBody>
          <div className="border-wrapper h-100 alert-light-light dark-helper">
            <h6 className="mb-3">{Padding}</h6>
            <div className="helper-common-box helper-p-wrapper">
              <div className="helper-p-box p-10 bg-light border">
                <span>.p-10</span>
              </div>
              {PaddingCartDetail.map((item, index) => (
                <div className={`helper-p-box p-${item} bg-light border`} key={index}>
                  <span>{`.p-${item}`}</span>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaddingCart;
