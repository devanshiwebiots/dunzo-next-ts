import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { QuestionsAlerts, QuestionsState, ThemePrimary } from "@/Constant/constant";
import { QuestionAlertData } from "@/Data/BonusUi/SweetAlert/SweetAlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const QuestionsAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: "Are you sure you want to do this?", showCancelButton: true, cancelButtonText: "Oh noez!", confirmButtonText: "Aww yiss!",confirmButtonColor: ThemePrimary });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={QuestionsAlerts} subTitle={QuestionAlertData} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="sweet-11" onClick={displayAlert}>{QuestionsState}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default QuestionsAlert;
