import { Unlock } from "@/Constant/constant";
import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

export const UnlockCard = () => {
  return (
    <Row>
      <Col xl="12" className="pe-0">
        <Card className="unlock">
          <CardBody>
            <div className="d-flex">
              <p>{"Unlock Machine Learning insights below. try our premium service for 1 month free!"}</p>
              <Button color="primary">{Unlock}</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
