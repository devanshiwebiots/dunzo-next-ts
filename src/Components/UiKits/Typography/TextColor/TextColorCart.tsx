import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { TextColor } from "@/Constant/constant";
import { TextColorData, TextDataColor } from "@/Data/Uikits/Typography/TypographyData";
import { Card, CardBody, Col } from "reactstrap";

const TextColorCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={TextColor} subTitle={TextColorData} headClass="pb-0" />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            <p className="txt-primary mb-0">This is Primary Color text<code>.txt_primary</code> Class</p>
            {TextDataColor.map(({ title, code }, index) => (
              <p className={`${code} mb-0`} key={index}>{`This is ${title} Color Text`}<code>.{code}</code> Class</p>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorCart;
