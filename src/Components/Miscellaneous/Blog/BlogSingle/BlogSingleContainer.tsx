"use client";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { SingleBlogData } from "./SingleBlogData";
import CommentSection from "./CommentSection";
import { Blog, BlogSingle } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const BlogSingleContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={BlogSingle} parent={Blog} title={BlogSingle} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="blog-single">
                  <SingleBlogData />
                  <CommentSection />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogSingleContainer;
