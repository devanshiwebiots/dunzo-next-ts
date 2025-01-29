import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { ActivityLine } from "./ActivityLine";
import { DropdownWithHeader } from "../../../Common/DropdownWithHeader";
import { ImagePath, RecentActivityTitle } from "@/Constant/constant";
import { MonthlyDropdownList, RecentActivityData } from "@/Data/General/Dashboard/DashboardData";
import Image from "next/image";

export const RecentActivity = () => {
  return (
    <Col lg="5">
      <Card>
        <DropdownWithHeader headerClass="pb-0" heading={RecentActivityTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
        <CardBody className="recent-activity">
          <ul>
            <ActivityLine />
            {RecentActivityData.map((item) => (
              <li className={`d-flex ${item.id === 3 ? "align-items-baseline ms-3" : ""}`} key={item.id}>
                {item.src && <Image priority width={40} height={40} src={`${ImagePath}/dashboard-2/user/${item.src}`} alt="" />}
                {item.id === 3 && <div className="badge-dot-danger"></div>}
                <div className={item.id === 3 ? "ms-4" : "ms-2"}>
                  <span>{item.dateTime}</span>
                  {item.paragraph && <p>{item.paragraph}</p>}
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};
