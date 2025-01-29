import { ContactUs, Home, Href, JavaScriptBehaviors, Profile, Settings } from "@/Constant/constant";
import { JavaScriptData } from "@/Data/Uikits/Lists/ListsData";
import React, { useState } from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { JavaScriptBehaviorTabContent } from "./JavaScriptBehaviorTabContent";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const JavaScriptBehavior = () => {
  const [basicTab, setBasicTab] = useState("1");

  return (
    <Col sm="12" xl="12">
      <Card>
        <CommonCardHeader title={JavaScriptBehaviors} subTitle={JavaScriptData} headClass="pb-0" />
        <CardBody>
          <Row>
            <Col sm="4">
              <ListGroup>
                <ListGroupItem tag="a" href={Href} className={`list-group-item-action bg-primary ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>{Home}</ListGroupItem>
                <ListGroupItem tag="a" href={Href} className={`list-group-item-action list-hover-primary ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>{Profile}</ListGroupItem>
                <ListGroupItem tag="a" href={Href} className={`list-group-item-action list-hover-primary ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>{ContactUs}</ListGroupItem>
                <ListGroupItem tag="a" href={Href} className={`list-group-item-action list-hover-primary ${basicTab === "4" ? "active" : ""}`} onClick={() => setBasicTab("4")}>{Settings}</ListGroupItem>
              </ListGroup>
            </Col>
            <JavaScriptBehaviorTabContent basicTab={basicTab} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavaScriptBehavior;
