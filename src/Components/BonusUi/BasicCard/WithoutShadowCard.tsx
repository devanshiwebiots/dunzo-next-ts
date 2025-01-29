import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ImagePath, WithoutShadowCards } from "@/Constant/constant";
import { WithoutShadowCardDetails } from "@/Data/BonusUi/BasicCard/BasicCardData";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const WithoutShadowCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="shadow-none border">
        <CommonCardHeader title={WithoutShadowCards} subTitle={WithoutShadowCardDetails} />
        <CardBody>
          <div className="flex-space flex-wrap align-items-center">
            <Image priority width={100} height={100} className="tab-img" src={`${ImagePath}/avtar/3.jpg`} alt="profile" />
            <p><strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020<br /><strong>Mail Us:</strong>contact@us@gmail.com<br /><strong>Contact Number: </strong>(954) 357-7760</p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithoutShadowCard;
