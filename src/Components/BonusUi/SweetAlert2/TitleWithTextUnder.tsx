import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { Surprise, ThemePrimary, TitleWithATextUnder } from "@/Constant/constant";
import { TitleSweetAlert } from "@/Data/BonusUi/SweetAlert/SweetAlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const TitleWithTextUnder = () => {
  const displayAlert = () => {
    SweetAlert.fire({ title: "It's Magic!", text: "Thank you for visiting Dunzo theme" ,confirmButtonColor:ThemePrimary  });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={TitleWithATextUnder} subTitle={TitleSweetAlert} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-2" onClick={displayAlert}>{Surprise}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TitleWithTextUnder;
