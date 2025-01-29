import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { TextColors } from "@/Constant/constant";
import { TextColorDetail, TextDataColors } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";

const TextColorsCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal custom-text-color">
        <CommonCardHeader title={TextColors} subTitle={TextColorDetail} headClass="pb-0" />
        <CardBody>
          <div className="helper-common-box"></div>
          <div className="d-flex align-items-center mb-2 gap-2">
            <div className="font-primary">{`This is a font-primary text used class as ."font-primary`}</div>
          </div>
          {TextDataColors.map((item, index) => (
            <Fragment key={index}>
              <div className="helper-common-box"></div>
              <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                <div className={item}>{`This is a font-primary text used class as .${item}`}</div>
              </div>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorsCart;
