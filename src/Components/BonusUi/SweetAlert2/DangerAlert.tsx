import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { DangerAlerts, DangerMode, ThemePrimary } from "@/Constant/constant";
import { DangerMessageData } from "@/Data/BonusUi/SweetAlert/SweetAlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DangerAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ icon: "error", title: "It's danger", text: "Something went wrong!",confirmButtonColor:ThemePrimary });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={DangerAlerts} subTitle={DangerMessageData} />
        <CardBody className="btn-showcase">
          <Button color="danger" className="sweet-7" onClick={displayAlert}>{DangerMode}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DangerAlert;
