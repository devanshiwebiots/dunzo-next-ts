import { Blog, BlogDiscardButton, BlogPostButton, PostEdit, AddPost } from "@/Constant/constant";
import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { FormPost } from "./FormPost";
import DropzoneClass from "./DropzoneClass";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const AddPostContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={AddPost} parent={Blog} title={AddPost} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={PostEdit} />
              <CardBody className="add-post">
                <FormPost />
                <DropzoneClass />
                <div className="btn-showcase text-end mt-4">
                  <Button color="primary">{BlogPostButton}</Button>
                  <Button color="light" type="reset">{BlogDiscardButton}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddPostContainer;
