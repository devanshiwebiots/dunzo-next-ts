"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import MarkJencoBlog from "./MarkJencoBlog/MarkJencoBlog";
import BlogWithDetails from "./BlogWithDetails";
import BlogWithoutDetails from "./BlogWithoutDetails";
import { Blog, BlogDetails } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const BlogDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={BlogDetails} parent={Blog} title={BlogDetails} />
      <Container fluid>
        <Row>
          <MarkJencoBlog />
          <BlogWithDetails />
          <BlogWithoutDetails />
        </Row>
      </Container>
    </>
  );
};

export default BlogDetailsContainer;
