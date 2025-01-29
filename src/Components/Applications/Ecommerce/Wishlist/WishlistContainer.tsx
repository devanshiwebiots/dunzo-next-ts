"use client";
import { ECommerce, Wishlist } from "@/Constant/constant";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { WishlistData } from "./WishlistData";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const WishlistContainer = () => {
  return (
    <>
    <Breadcrumbs pageTitle={Wishlist} parent={ECommerce} title={Wishlist} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={Wishlist} />
              <CardBody>
                <WishlistData />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
    
  );
};

export default WishlistContainer;