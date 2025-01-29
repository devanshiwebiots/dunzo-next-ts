import { Discount, ImagePath, SalesEventCalendarTitle, SetSalesEvents } from "@/Constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

export const SalesEventCalendar = () => {
  return (
    <Col xl="4" className="col-xl-70 box-col-7 pe-0 pedding-sm">
      <Card className="mb-0 margin-bottom sales-event">
        <CardBody className="pt-0">
          <div className="d-flex">
            <div className="event">
              <h3>{SalesEventCalendarTitle}</h3>
              <p>{"Bland it curability id vel vitae Ullamcorper sapien ante quam id. Vulputate viverra dictum."}</p>
            </div>
            <div className="sale">
              <Image priority width={198} height={203} src={`${ImagePath}/dashboard-2/event.png`} alt="" />
            </div>
          </div>
          <div className="set-sales">
            <Link className="btn btn-primary mt-2" href="/app/calendar">
              {SetSalesEvents}
            </Link>
            <Link className="btn discount mt-2" href="/ecommerce/product">
              {Discount}
            </Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
