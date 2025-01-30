import { CrossFades, ImagePath } from "@/Constant/constant";
import { CrossFadeData, CrossFadeDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";

const CrossFade = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={CrossFades} subTitle={CrossFadeData} />
        <CardBody>
          <Swiper modules={[Autoplay, EffectFade, Navigation]} effect="fade" navigation loop autoplay={{ delay: 2000 }} slidesPerView={1} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
            {CrossFadeDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                  <RatioImage className="d-block w-100" src={`${ImagePath}/${item.image}`} alt="drawing-room" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CrossFade;
