import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { PikachuAlerts, Pikachu, ThemePrimary } from "@/Constant/constant";
import { PikachuAlertData } from "@/Data/BonusUi/SweetAlert/SweetAlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const PikachuAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: "A wild Pikachu appeared! What do you want to do?", showCancelButton: true, cancelButtonText: "Run away!", confirmButtonText: "Throw Pokeball!", confirmButtonColor: ThemePrimary, denyButtonText: "Defeat", denyButtonColor: ThemePrimary, showDenyButton: true }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({ icon: "success", title: "Yeah!", text: "Pikachu was caught!",confirmButtonColor: ThemePrimary });
      } else if (result.dismiss) {
        SweetAlert.fire({ text: "Got away safely!",confirmButtonColor: ThemePrimary });
      } else if (result.isDenied) {
        SweetAlert.fire({ text: "Pikachu fainted! You gained 500 XP!",confirmButtonColor: ThemePrimary });
      }
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={PikachuAlerts} subTitle={PikachuAlertData} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="sweet-12" onClick={displayAlert}>{Pikachu}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PikachuAlert;
