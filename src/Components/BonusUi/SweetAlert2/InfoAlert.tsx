import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { InfoAlerts, Informational, ThemePrimary } from "@/Constant/constant";
import { InfoSweetAlert } from "@/Data/BonusUi/SweetAlert/SweetAlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const InfoAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: "Please Click on this button it's big surprise for you.",confirmButtonColor:ThemePrimary }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({ text: "Thank you for visit Dunzo theme : true" ,confirmButtonColor:ThemePrimary});
      } else {
        SweetAlert.fire({ text: "Thank you for visit Dunzo theme : null",confirmButtonColor:ThemePrimary });
      }
    });
  };
  
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={InfoAlerts} subTitle={InfoSweetAlert} />
        <CardBody className="btn-showcase">
          <Button color="info" className="sweet-4" onClick={displayAlert}>{Informational}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InfoAlert;
