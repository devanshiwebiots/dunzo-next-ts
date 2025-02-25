import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavLink, Row } from "reactstrap";
import { VerticalTabContent } from "./VerticalTabContent";
import { Components, Home, Href, PageTab, Settings, VerticalTab } from "@/Constant/constant";
import { VerticalTabData } from "@/Data/Uikits/Tabs/TabsData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const VerticalTabs = () => {
  const [basicTab, setBasicTab] = useState("2");
  return (
    <Col sm="12" xxl="6">
      <Card className="height-equal">
        <CommonCardHeader title={VerticalTab} subTitle={VerticalTabData} headClass="pb-0" />
        <CardBody>
          <Row>
            <Col md="4" xs="12">
              <Nav pills className="flex-column nav-success">
                <NavLink href={Href} className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>{Home}</NavLink>
                <NavLink hre={Href} className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>{Components}</NavLink>
                <NavLink hre={Href} className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>{PageTab}</NavLink>
                <NavLink hre={Href} className={basicTab === "4" ? "active" : ""} onClick={() => setBasicTab("4")}>{Settings}</NavLink>
              </Nav>
            </Col>
            <VerticalTabContent basicTab={basicTab}/>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalTabs;
