import SVG from "@/CommonComponent/SVG/Svg";
import { ImagePath } from "@/Constant/constant";
import DynamicNumber from "@/utils/DynamicNumber";
import Image from "next/image";
import React from "react";
import { Card, CardBody, CardHeader, Col, Progress } from "reactstrap";

export const FeedbackCard = () => {
  return (
    <Col xl="2" sm="6" className="col-xl-40 box-col-5 pedding-start pedding-sm">
      <Card className="mb-0 margin-bottom online-order">
        <CardHeader className="feedback-card pb-0">
          <div className="d-flex">
            <div className="order bg-light-success">
              <span />
              <SVG iconId="feedback" />
            </div>
            <div className="arrow-chart">
              <SVG iconId="arrow-chart-up" />
              <span className="font-success">{"+2.4%"}</span>
            </div>
          </div>
          <div className="online">
            <span>{"Feedback"}</span>
            <h2>{"75,5653"}</h2>
          </div>
        </CardHeader>
        <CardBody>
          <div className="user-details customers">
            <ul>
              {DynamicNumber(4).map((item, index) => (
                <li className="d-inline-block" key={index}>
                  <Image priority width={59} height={59} className="rounded-circle" src={`${ImagePath}/dashboard-2/user/${item}.png`} alt="user" />
                </li>
              ))}
            </ul>
          </div>
          <Progress color="success" value={50} />
        </CardBody>
      </Card>
    </Col>
  );
};
