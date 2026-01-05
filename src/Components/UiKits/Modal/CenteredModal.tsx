import { CenteredModals, Close, ImagePath, SomethingWentWrong, VerticallyCentered } from "@/Constant/constant";
import { CenteredModalList } from "@/Data/Uikits/Modal/ModalData";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import CommonModal from "./Common/CommonModal";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import Image from "next/image";

const CenteredModal = () => {
  const [centred, setCentered] = useState(false);
  const centeredToggle = () => setCentered(!centred);
  
  return (
      <Col xl="4">
        <Card>
          <CommonCardHeader title={CenteredModals} subTitle={CenteredModalList} headClass="pb-0" />
          <CardBody className="badge-spacing">
          <Button color="success" onClick={centeredToggle}>{VerticallyCentered}</Button>
            <CommonModal centered isOpen={centred} toggle={centeredToggle}>
              <div className="modal-toggle-wrapper">
                <ul className="modal-img">
                  <li className="text-center"><Image priority width={100} height={100} src={`${ImagePath}/gif/danger.gif`} alt="error" unoptimized/></li>
                </ul>
                <h4 className="text-center pb-2">{SomethingWentWrong}</h4>
                <p className="text-center">Attackers on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.</p>
                <Button color="secondary" className="d-flex m-auto" onClick={centeredToggle}>{Close}</Button>
              </div>
            </CommonModal>
          </CardBody>
        </Card>
      </Col>
  );
};

export default CenteredModal;
