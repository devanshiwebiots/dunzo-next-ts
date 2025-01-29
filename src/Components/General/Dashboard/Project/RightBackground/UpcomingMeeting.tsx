import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import Calendar from "react-calendar";
import ReactApexChart from "react-apexcharts";
import { DropdownWithHeader } from "../../Common/DropdownWithHeader";
import { ImagePath, TodaySanFransico, UpcomingMeetingTitle } from "@/Constant/constant";
import { MonthlyDropdownList, ProjectRadarChart } from "@/Data/General/Dashboard/DashboardData";
import Image from "next/image";

export const UpcomingMeeting = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Col xl="12" className="col-xl-50 box-col-6 p-0">
      <Card className="mb-0 upcoming-meeting">
        <DropdownWithHeader heading={UpcomingMeetingTitle} dropDownClass="icon-dropdown" dropDownList={MonthlyDropdownList} dropDownIcon={true} />
        <CardBody className="p-0">
          <div className="default-datepicker">
            <Calendar onChange={(value)=>setDate(value as Date)} value={date} className="border-0" />
          </div>
          <div className="today-weather mt-3">
            <div className="d-flex">
              <Image priority width={38} height={38} src={`${ImagePath}/dashboard-3/sun.gif`} alt="user" />
              <span>{TodaySanFransico}</span>
              <div className="flex-grow-1">
                <h6>{"Jun,07 "}</h6>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <ReactApexChart options={ProjectRadarChart} series={ProjectRadarChart.series} type="radar" height={270} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
