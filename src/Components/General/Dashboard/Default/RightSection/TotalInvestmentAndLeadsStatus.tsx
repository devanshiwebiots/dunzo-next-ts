import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { DropdownWithHeader } from "../../Common/DropdownWithHeader";
import { ImagePath, LeadsStatusTitle, TotalInvestmentTitle } from "@/Constant/constant";
import { InvestmentOptions, LeadsStatusData, MonthlyDropdownList, TotalInvestmentData } from "@/Data/General/Dashboard/DashboardData";
import Image from "next/image";

export const TotalInvestmentAndLeadsStatus = () => {
  return (
    <>
      <Col xxl="5" md="6" className="col-xl-50">
        <Card>
          <DropdownWithHeader headerClass="card-no-border pb-0" heading={TotalInvestmentTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
          <CardBody className="p-0 pb-3 pt-3">
            <div className="investment-card">
              <div id="Investment-chart">
                <ReactApexChart type="donut" options={InvestmentOptions} series={InvestmentOptions.series} height={200} />
              </div>
              <ul className="">
                {TotalInvestmentData.map((item, index) => (
                  <li key={index}>
                    <h5>{item.text}</h5>
                    <span>
                      {"$"}
                      {item.rate}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xxl={12}>
        <Card className="leads">
          <DropdownWithHeader headerClass="card-no-border pb-0" heading={LeadsStatusTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
          <CardBody>
            <div className="lead-status pt-1 pb-1">
              {LeadsStatusData.map((item) => (
                <ul key={item.id}>
                  {item.child.map((list) => (
                    <li className={list.class} key={list.id}>
                      {list.image && <Image priority width={20} height={20} src={`${ImagePath}/dashboard/user/${list.image}`} alt="" />}
                      {list.text}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
