/* eslint-disable @next/next/no-img-element */
import { DealOfTheDay, ImagePath, SpecialDiscount } from "@/Constant/constant";
import { DiscountCardData, DiscountSliderOptions } from "@/Data/General/Dashboard/DashboardData";
import Countdown from "react-countdown";
import Slider from "react-slick";
import { Card, CardBody } from "reactstrap";
import CountdownRenderer from "./CountDown/CountdownRenderer";

export const DiscountCard = () => {
  return (
    <Card className='discount-card'>
      <CardBody>
        <div className='owl-carousel owl-theme' id='owl-carousel-dashboard'>
          <Slider {...DiscountSliderOptions}>
            {DiscountCardData.map((item) => (
              <div className='special-offer' key={item.id}>
                <div className='d-flex'>
                  <div className='flex-shrink-0'>
                    <h3>{item.brand}</h3>
                    <h5>
                      {"$"}
                      {item.discount}
                      <del>
                        {"$"}
                        {item.price}
                      </del>
                    </h5>
                    <h6 className='bg-light'>{SpecialDiscount} </h6>
                    <p>
                      {DealOfTheDay}{" "}
                      <span>
                        {"$"}
                        {item.deal}{" "}
                      </span>
                    </p>
                    <Countdown date={Date.now() + 36000 * 100000} renderer={CountdownRenderer} />
                  </div>
                  <img src={`${ImagePath}/dashboard-2/product/${item.image}`} alt='' />
                </div>
                <div className='product-slider'>
                  <div className='shap-block'>
                    <div className='rounded-shap animate-bg-secondary'>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </CardBody>
    </Card>
  );
};
