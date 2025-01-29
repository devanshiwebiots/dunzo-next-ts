import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { SweetWarningButton, ThemePrimary, WarningAlerts } from "@/Constant/constant";
import { WarningSweetAlert } from "@/Data/BonusUi/SweetAlert/SweetAlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const WarningAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ icon: "warning", title: "Are you sure?", text: "Once deleted, you will not be able to recover this imaginary file!", confirmButtonColor:ThemePrimary, showCancelButton: true}).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({ icon: "success", text: "Poof! Your imaginary file has been deleted!" ,confirmButtonColor:ThemePrimary});
      } else if (result.dismiss) {
        SweetAlert.fire({ text: "Your imaginary file is safe!",confirmButtonColor:ThemePrimary });
      }
    });
  };
  
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={WarningAlerts} subTitle={WarningSweetAlert} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="sweet-5" onClick={displayAlert}>{SweetWarningButton}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WarningAlert;
