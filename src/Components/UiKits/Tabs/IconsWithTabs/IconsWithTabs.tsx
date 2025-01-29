import { Contact, Home, Href, IconsWithTab, Profile } from "@/Constant/constant";
import { IconTabData } from "@/Data/Uikits/Tabs/TabsData";
import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { IconTabContent } from "./IconTabContent";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const IconsWithTabs = () => {
  const [basicTab, setBasicTab] = useState("1");

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={IconsWithTab} subTitle={IconTabData} headClass="pb-0" />
        <CardBody>
          <Nav tabs>
            <NavItem><NavLink href={Href} className={`txt-secondary ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}><i className="icofont icofont-ui-home"></i> {Home}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={`txt-secondary ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}><i className="icofont icofont-man-in-glasses"></i> {Profile}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={`txt-secondary ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}><i className="icofont icofont-contacts"></i> {Contact}</NavLink></NavItem>
          </Nav>
          <IconTabContent basicTab={basicTab}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconsWithTabs;
