import { MonthlyDropdownList, RedesignCardData } from "@/Data/General/Dashboard/DashboardData";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { CommonDropdown } from "../../Common/CommonDropdown";
import SVG from "@/CommonComponent/SVG/Svg";
import Link from "next/link";

export const RedesignCard = () => {
  return (
    <>
      {RedesignCardData.map((item) => (
        <Col xl="12" className="col-xl-100 p-0 pe-30 ps-20" key={item.id}>
          <Card className="redesign">
            <CardBody>
              <div className="header-top">
                <h6 className="font-primary">{item.title}</h6>
                <CommonDropdown dropDownClass="icon-dropdown" dropDownList={MonthlyDropdownList} dropDownIcon={true} />
              </div>
              <h5>{item.text}</h5>
              <div className="flex-shrink-0">
                <SVG iconId="calendar" />
                <span>{"Created on "}{item.date}</span>
              </div>
              <Link href="/project/new_project">
                <div className="d-flex">
                  <div className={item.iconClass}>
                    <SVG iconId="timer" />
                  </div>
                  <div className="flex-grow-1">
                    <span>{"Deadline"}</span>
                    <h6>{item.dayDate}</h6>
                  </div>
                </div>
              </Link>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
