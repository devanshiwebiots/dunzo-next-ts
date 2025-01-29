import SVG from "@/CommonComponent/SVG/Svg";
import { Projects } from "@/Constant/constant";
import { PendingProjectData } from "@/Data/General/Dashboard/DashboardData";
import Link from "next/link";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

export const PendingProject = () => {
  return (
    <Col xl="4" lg="4" md="8">
      <Row>
        {PendingProjectData.map((item) => (
          <Col xl="12" key={item.id}>
            <Card className="pending-project">
              <CardBody>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <Link href="/project/project_list">
                      <h4>{item.title} {Projects}</h4>
                      <span>{item.text}</span>
                    </Link>
                    <p className="d-flex">
                      <span className={`bg-light-${item.id === 2 ? "danger" : "success"} me-2`}>
                        <SVG iconId={item.id === 2 ? "chart-down" : "chart-up"} />
                      </span>
                      <span className={`font-${item.id === 2 ? "danger" : "success"} me-2`}>
                        {item.percent}{"%"}
                      </span>
                      <span>{"Since last month"}</span>
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`bg-light-${item.color}`}>
                      <SVG iconId={item.icon} />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
