'use client'
import React from "react";
import { Card, CardBody, Container, Row } from "reactstrap";
import DragCalendar from "./DragCalendar";
import { Apps, CalendarBasic } from "@/Constant/constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";

const CalenderContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={CalendarBasic} parent={Apps} title={CalendarBasic} />
      <Container fluid className="calendar-basic">
        <Card>
          <CardBody>
            <Row>
              <DragCalendar />
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default CalenderContainer;
