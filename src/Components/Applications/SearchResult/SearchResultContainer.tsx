"use client";
import React, { useCallback, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import SearchInput from "./SearchInput";
import SearchTabs from "./SearchTabs";
import SearchTabContent from "./TabContent/SearchTabContent";
import { Apps, SearchWebsite } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const SearchResultContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  return (
    <>
      <Breadcrumbs pageTitle={SearchWebsite} parent={Apps} title={SearchWebsite} />
      <Container fluid className="search-page">
        <Row>
          <Col sm="12">
            <Card>
              <SearchInput />
              <CardBody>
                <SearchTabs callbackActive={callback} activeTabValue={1} />
                <SearchTabContent activeTab={activeTab} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchResultContainer;
