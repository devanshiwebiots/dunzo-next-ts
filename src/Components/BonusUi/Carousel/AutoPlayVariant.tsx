import { AutoPlayVariants, ImagePath } from "@/Constant/constant";
import { AutoPlayData, AutoPlayDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";

const AutoPlayVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={AutoPlayVariants} subTitle={AutoPlayData} />
        <CardBody>
          <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper swiper-h">
            {AutoPlayDataList.map((item, index) => (
              <SwiperSlide key={index}>
                <RatioImage  src={`${ImagePath}/${item.image}`} className="d-block w-100" alt="Vertical_Slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoPlayVariant;
