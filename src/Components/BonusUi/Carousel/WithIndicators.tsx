import { ImagePath, WithIndicator } from "@/Constant/constant";
import { WithIndicatorData, WithIndicatorDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";

const WithIndicators = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={WithIndicator} subTitle={WithIndicatorData} />
        <CardBody>
          <Swiper modules={[Pagination, Navigation]} navigation pagination={{ clickable: true }} spaceBetween={30} slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
            {WithIndicatorDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <RatioImage className="d-block w-100" src={`${ImagePath}/${item.image}`} alt="drawing-room" />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIndicators;
