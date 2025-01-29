import { MonthlyDropdownList, WebCardData } from "@/Data/General/Dashboard/DashboardData";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { CommonDropdown } from "../../Common/CommonDropdown";
import SVG from "@/CommonComponent/SVG/Svg";
import { CommentCustomerContent } from "./Comment&CustomerContent";

export const WebCard = () => {
  return (
    <>
      {WebCardData.map((item) => (
        <Col xl="4" lg="4" md={item.md} key={item.id}>
          <Card className="web-card">
            <CardBody>
              <div className={`d-flex ${item.divClass}`}>
                <div className="header-top">
                  <div className={`mobile-app bg-light-${item.color}`}>
                    <span></span>
                    <SVG iconId={item.icon} />
                  </div>
                  <div className="flex-grow-1">
                    <h4>{item.title}</h4>
                    <span>{item.text}</span>
                  </div>
                </div>
                <CommonDropdown dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
              </div>
              <CommentCustomerContent item={item} />
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
