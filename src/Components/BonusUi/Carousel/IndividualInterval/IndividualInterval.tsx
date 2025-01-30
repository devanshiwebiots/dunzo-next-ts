//@ts-nocheck
import { ImagePath, IndividualCarouselItemIntervals } from "@/Constant/constant";
import { ItemIntervalData, ItemIntervalDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";

const IndividualInterval = () => {

   const swiperRef = useRef(null);

   useEffect(() => {
     if (!swiperRef.current) return;

     const swiperInstance = swiperRef.current.swiper;

     // Function to update autoplay delay dynamically
     const updateAutoplayDelay = () => {
       const currentSlideIndex = swiperInstance.realIndex;
       const currentInterval = ItemIntervalDataList[currentSlideIndex].interval;
       swiperInstance.params.autoplay.delay = currentInterval;
       swiperInstance.autoplay.stop();
       swiperInstance.autoplay.start();
     };

     // Update autoplay delay when slide changes
     swiperInstance.on("slideChange", updateAutoplayDelay);

     // Cleanup on component unmount
     return () => {
       swiperInstance.off("slideChange", updateAutoplayDelay);
     };
   }, []);
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={IndividualCarouselItemIntervals} subTitle={ItemIntervalData} />
        <CardBody>
          <Swiper ref={swiperRef} modules={[Autoplay, Navigation]} navigation loop autoplay={{ delay: ItemIntervalDataList[0].interval }} slidesPerView={1}>
            {ItemIntervalDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
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

export default IndividualInterval;
