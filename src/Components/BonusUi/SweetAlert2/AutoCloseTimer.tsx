import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { AutoCloseTimerTitle, Timer, ThemePrimary } from "@/Constant/constant";
import { AutoCloseData } from "@/Data/BonusUi/SweetAlert/SweetAlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const AutoCloseTimer = () => {
  const displayAlert = () => {
    SweetAlert.fire({ timer: 3000, showConfirmButton: false, title: "Auto close alert!", text: "just a wait! I will close in 3 second!", confirmButtonColor: ThemePrimary });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={AutoCloseTimerTitle} subTitle={AutoCloseData} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="sweet-14" onClick={displayAlert}>{Timer}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoCloseTimer;
