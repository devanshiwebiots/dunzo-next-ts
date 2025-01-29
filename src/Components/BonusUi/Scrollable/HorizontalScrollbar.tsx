import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { HorizontalScrollbars, ImagePath } from "@/Constant/constant";
import { HorizontalScrollData, HorizontalScrollDataList } from "@/Data/BonusUi/Scrollable/ScrollableData";
import Image from "next/image";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";

const HorizontalScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={HorizontalScrollbars} subTitle={HorizontalScrollData} />
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo" style={{ width: "100%", height: "300px" }}>
            <div className="horz-scroll-content">
              <Row>
                <Col sm="2">
                  <div className="horizontal-img"><Image priority width={240} height={360} className="img-fluid" src={`${ImagePath}/scrollbar/fashion1.jpg`} alt="girl" /></div>
                </Col>
                {HorizontalScrollDataList.map((src, index) => (
                  <Col sm="2" key={index}>
                    <div className="horizontal-img"><Image priority width={240} height={360} className="img-fluid" src={`${ImagePath}/${src}`} alt="girl" /></div>
                  </Col>
                ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScrollbar;
