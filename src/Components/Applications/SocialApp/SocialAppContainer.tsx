'use client'
import React, { useCallback, useState } from "react";
import { Container } from "reactstrap";
import UserProfile from "./UserProfile/UserProfile";
import SocialAppTabContent from "./UserContext/SocialAppTabContent";
import { Apps, SocialApp } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const SocialAppContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  return (
    <>
      <Breadcrumbs pageTitle={SocialApp} parent={Apps} title={SocialApp} />
      <Container fluid>
        <div className="user-profile social-app-profile">
          <UserProfile callback={callback} />
          <SocialAppTabContent activeTab={activeTab} />
        </div>
      </Container>
    </>
  );
};

export default SocialAppContainer;
