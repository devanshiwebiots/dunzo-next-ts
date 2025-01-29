import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { ColoredBreadcrumbs } from "@/Constant/constant";
import { StaticColoredBreadcrumb } from "./StaticColoredBreadcrumb";
import { DynamicColoredBreadcrumb } from "./DynamicColoredBreadcrumb";
import { ColoredBreadcrumbData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const ColoredBreadcrumb = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ColoredBreadcrumbs} subTitle={ColoredBreadcrumbData} />
        <CardBody>
          <StaticColoredBreadcrumb />
          <DynamicColoredBreadcrumb />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredBreadcrumb;
