import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { IconInHeadings, ImagePath } from "@/Constant/constant";
import { IconInHeadingData } from "@/Data/BonusUi/BasicCard/BasicCardData";
import { Card, CardBody, Col } from "reactstrap";

const IconInHeading = () => {
  const LibraryIcon = () => {
    return <i className="icofont icofont-library me-2"></i>;
  };
  
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={IconInHeadings} subTitle={IconInHeadingData} icon={<LibraryIcon/>} />
        <CardBody>
          <div className="flex-space flex-wrap align-items-center">
            <picture><img className="tab-img" src={`${ImagePath}/blog/img.png`} alt="profile" /></picture>
            <p><strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020<br /><strong>Mail Us:</strong>contact@us@gmail.com<br /><strong>Contact Number: </strong>(954) 357-7760</p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInHeading;
