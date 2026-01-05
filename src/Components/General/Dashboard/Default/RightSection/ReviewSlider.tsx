import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import Slider from "react-slick";
import { ImagePath, ReviewTitle } from "@/Constant/constant";
import { DropdownWithHeader } from "../../Common/DropdownWithHeader";
import { MonthlyDropdownList, ReviewSliderData, ReviewSliderOptions } from "@/Data/General/Dashboard/DashboardData";
import Image from "next/image";

export const ReviewSlider = () => {
  return (
    <Col xxl="3" md="4" className="box-col-6 col-dash-40 proorder-xl-7">
      <Card className="review-slider">
        <DropdownWithHeader headerClass="card-no-border pb-0" heading={ReviewTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
        <CardBody className="p-4">
          <div className="owl-carousel owl-theme mb-2" id="owl-carousel-dashboard">
            <Slider {...ReviewSliderOptions}>
              {ReviewSliderData.map((item) => (
                <div className="review" key={item.id}>
                  <div>
                    <Image priority width={72} height={72} className="img-fluid" src={`${ImagePath}/dashboard/user/${item.src}`} alt="" unoptimized/>
                    <div className="review-content">
                      <h2>{item.title}</h2>
                    </div>
                    <div className="d-flex">
                      <h5>{item.rate}</h5>
                      <p className="pull-right ms-2 me-2 mb-0 mt-0">
                        <i className="fa fa-star font-secondary"></i>
                      </p>
                      <div className="flex-grow-1">
                        <h5>{item.rate2}</h5>
                      </div>
                    </div>
                    <p>{"“Best  Product i’ve been seen on market, best price, best quality! Overall Amazing!!!”"}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
