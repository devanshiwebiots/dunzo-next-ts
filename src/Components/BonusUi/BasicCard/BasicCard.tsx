import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { BasicCards } from "@/Constant/constant";
import { BasicCardData } from "@/Data/BonusUi/BasicCard/BasicCardData";
import { Card, CardBody, Col } from "reactstrap";

const BasicCard = () => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={BasicCards} subTitle={BasicCardData} />
        <CardBody>
          <p className="mb-0">
            {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCard;
