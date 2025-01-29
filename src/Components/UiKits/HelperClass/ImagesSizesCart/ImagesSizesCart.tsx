import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ImagePath, ImagesSizes } from "@/Constant/constant";
import { ImageData, ImagesDetails } from "@/Data/Uikits/HelperClass/HelperClassData";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const ImagesSizesCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={ImagesSizes} subTitle={ImageData} headClass="pb-0" />
        <CardBody>
          <div className="gradient-border gap-3">
            <Image priority width={30} height={30} className="img-30 img-h-30" src={`${ImagePath}/blog/comment.jpg`} alt="img-size-10" />
            {ImagesDetails.map((item, index) => (
              <Image priority width={item} height={item} className={`img-${item} img-h-${item}`} src={`${ImagePath}/blog/comment.jpg`} alt={`img-size-${item}`} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesSizesCart;
