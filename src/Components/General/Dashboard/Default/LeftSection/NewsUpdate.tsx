import { ImagePath, MinAgo, NewsUpdateTitle } from "@/Constant/constant";
import { NewsUpdateData, MonthlyDropdownList } from "@/Data/General/Dashboard/DashboardData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { DropdownWithHeader } from "../../Common/DropdownWithHeader";

export const NewsUpdate = () => {
  return (
    <Col xl="12" md="6" className="box-col-6 col-xl-50">
      <Card className="news-update">
        <DropdownWithHeader headerClass='pb-0' heading={NewsUpdateTitle} dropDownList={MonthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
        <CardBody>
          {NewsUpdateData.map((item) => (
            <div className={`d-flex align-items-center ${item.id === 1 ? "pt-0" : ""}`} key={item.id}>
              <Image priority width={77} height={67} src={`${ImagePath}/dashboard/${item.src}`} alt="" unoptimized/>
              <div className="flex-grow-1 ms-3">
                <Link href="/app/social_app">
                  <h5>{item.title}</h5>
                  <span>{item.spanText}</span>
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Button color="transparent">
                  {item.time} {MinAgo}
                </Button>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
