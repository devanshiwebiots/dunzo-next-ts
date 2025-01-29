import { OrderLists } from "@/Constant/constant";
import { OrderListData } from "@/Data/Uikits/Typography/TypographyData";
import React, { Fragment } from "react";
import { Col } from "reactstrap"

export const DescriptionList = () => {
  return (
    <Col md="12" xxl="4">
      <div className="card-wrapper border rounded-3">
        <h6 className="sub-title fw-bold">{OrderLists}</h6>
        <dl className="pb-1">
          {OrderListData.map((item, index) => (
            <Fragment key={index}>
              <dt>{item.dt}</dt>
              <dd>{item.dd}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </Col>
  );
};
