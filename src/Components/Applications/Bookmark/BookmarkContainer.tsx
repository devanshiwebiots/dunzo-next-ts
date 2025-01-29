'use client'
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import SideBar from "./SideBar";
import BookmarksTabs from "./BookmarkTabs";
import { Apps, Bookmarks } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const BookmarkContainer = () => {
  return (
    <>
     <Breadcrumbs pageTitle={Bookmarks} parent={Apps} title={Bookmarks} />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <SideBar />
            <Col xl="9" md="12" className="box-col-12">
              <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                  <div className="ps-0">
                    <BookmarksTabs />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
    
  );
};

export default BookmarkContainer;
