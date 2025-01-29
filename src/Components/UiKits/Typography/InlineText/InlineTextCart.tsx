import { Card, CardBody, Col } from "reactstrap";
import { InlineData } from "@/Data/Uikits/Typography/TypographyData";
import { Del, EmText, Highlight, InlineTextElements, InstText, Mark, SmallText, SText, StrongText, UText } from "@/Constant/constant";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const InlineTextCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={InlineTextElements} subTitle={InlineData} headClass="pb-0" />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            <p className="mb-0">{Mark}<mark>{Highlight},</mark> Text.</p>
            <p className="mb-0"><del>{Del}</del></p>
            <p className="mb-0"><s>{SText}</s></p>
            <p className="mb-0"><ins>{InstText}</ins></p>
            <p className="mb-0"><u>{UText}</u></p>
            <p className="mb-0"><small>{SmallText}</small></p>
            <p className="mb-0"><strong>{StrongText}</strong></p>
            <p className="mb-0"><em>{EmText}</em></p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineTextCart;
