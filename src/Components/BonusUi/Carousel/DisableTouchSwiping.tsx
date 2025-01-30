import { DisableTouchSwipingTitle, ImagePath } from "@/Constant/constant";
import { DisableTouchData, DisableTouchDataList } from "@/Data/BonusUi/ReactstrapCarousel/ReactstrapData";
import { Card, CardBody, Col } from "reactstrap";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";

const DisableTouchSwiping = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={DisableTouchSwipingTitle} subTitle={DisableTouchData} />
        <CardBody>
          <Swiper modules={[Navigation]} navigation loop slidesPerView={1} simulateTouch={false}>
            {DisableTouchDataList?.map((item, index) => (
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

export default DisableTouchSwiping;
