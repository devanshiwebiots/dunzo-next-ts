import SVG from "@/CommonComponent/SVG/Svg";
import { UpcomingProjectsTitle } from "@/Constant/constant";
import Link from "next/link";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

export const UpcomingProjects = () => {
  return (
    <Col xl="12" className="p-0 pe-30 ps-20">
      <Card className="upcoming-project">
        <CardBody>
          <Link href="/project/project_list">
            <div className="d-flex">
              <h4>{UpcomingProjectsTitle}</h4>
              <div className="flex-shrink-0">
                <SVG iconId="add" />
              </div>
            </div>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};
