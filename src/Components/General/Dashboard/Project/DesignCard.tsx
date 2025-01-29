import { DesignCardTitle, HireUs } from "@/Constant/constant";
import Link from "next/link";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

export const DesignCard = () => {
  return (
    <Col xs="12">
      <Card className="design-card">
        <CardBody>
          <h5>{DesignCardTitle}</h5>
          <p>{"Bringing Well-crafted design and scalable infrastructure."}</p>
          <Link className="btn" href="/job_search/apply">
            {HireUs}
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};
