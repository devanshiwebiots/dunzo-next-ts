import { Button, Card, CardBody, Col } from "reactstrap";
import { FactorAuthentication, ImagePath, TwoFactorAuthenticationHeading } from "@/Constant/constant";
import ModalOne from "./ModalOne";
import { useAppDispatch } from "@/Redux/Hooks";
import { setModalOne } from "@/Redux/Reducers/FormLayout/TwoFactorSlice";
import Image from "next/image";

const TwoFactorAuthentication = () => {
  const dispatch = useAppDispatch()
  return (
    <Col sm="12">
      <Card>
        <CardBody className="authentication-body">
          <div className="authentication-wrapper">
            <h4>{TwoFactorAuthenticationHeading}</h4>
            <p>Click on the authentication button below and scan the QR code</p>
            <Image priority width={480} height={420} src={`${ImagePath}/forms/qr-scan.png`} alt="qr-scan"/>
          </div>
          <Button tag="a" color="primary" className="mt-5" onClick={()=>dispatch(setModalOne())}>{FactorAuthentication}</Button>
          <ModalOne />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TwoFactorAuthentication;
