import { Contact, Home, Href, Profile, SimpleTab } from "@/Constant/constant";
import { TabsData } from "@/Data/Uikits/Tabs/TabsData";
import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { SimpleTabContent } from "./SimpleTabContent";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const SimpleTabs = () => {
  const [basicTab, setBasicTab] = useState("1");

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={SimpleTab} subTitle={TabsData} headClass="pb-0" />
        <CardBody>
          <Nav tabs className="simple-wrapper">
            <NavItem><NavLink href={Href} className={`txt-primary ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>{Home}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={`txt-primary ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>{Profile}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={`txt-primary ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>{Contact}</NavLink></NavItem>
          </Nav>
          <SimpleTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleTabs;
