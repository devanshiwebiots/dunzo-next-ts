import { FeaturedTutorial, ImagePath, ThemePrimary } from "@/Constant/constant";
import { FeaturesData } from "@/Data/Miscellaneous/Knowledgebase/KnowledgebaseData";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import ProductHover from "./ProductHover";
import Image from "next/image";

const FeaturesTutorial = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h5 className="mb-0">{FeaturedTutorial}</h5>
      </div>
      <Row>
        {FeaturesData.map((item, id) => (
          <Col xl="3" sm="6" className="xl-50 box-col-3" key={id}>
            <Card className="features-faq product-box">
              <div className="faq-image product-img">
                <div className="knowledgebase-image">
                  <Image priority width={600} height={450} alt="feature" className="img-fluid" src={`${ImagePath}/${item.img}`} />
                </div>
                <ProductHover />
              </div>
              <CardBody>
                <h6 className="f-w-500">{item.title}</h6>
                <p>{item.short_description}</p>
              </CardBody>
              <CardFooter className="d-flex align-items-center justify-content-between">
                <span>{item.date}</span>
                <Rating fillColor={ThemePrimary} initialValue={Math.random() * 5} size={17} />
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default FeaturesTutorial;
