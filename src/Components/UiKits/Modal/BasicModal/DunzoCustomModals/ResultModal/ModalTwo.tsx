import { ClickOut, ImagePath, DunzoLogin } from "@/Constant/constant";
import { useState } from "react";
import { Button, Col } from "reactstrap";
import CommonModal from "../../../Common/CommonModal";
import { StaticForm } from "../../../StaticBackdropModal/StaticForm";
import { CommonRihoModalTitle } from "../Common/CommonRihoModalTitle";
import Image from "next/image";

const ModalTwo = () => {
  const [modalTwo, setModalTwo] = useState(false);
  const modalTwoToggle = () => setModalTwo(!modalTwo);

  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="Riho-demo-img">
          <CommonRihoModalTitle heading="Modal 2 -" subHeading="Result Modal" text="Example of Riho login form." />
          <div className="overflow-hidden">
            <Image priority width={482} height={263} className="image-fluid" src={`${ImagePath}/alert/learning.png`} alt="learning" />
            <Button color="primary" className="mx-auto mt-3" onClick={modalTwoToggle}>{ClickOut}</Button>
          </div>
          <CommonModal centered modalBodyClassName="social-profile text-start" fade={true} isOpen={modalTwo} toggle={modalTwoToggle}>
            <div className="modal-toggle-wrapper">
              <h3>{DunzoLogin}</h3>
              <p>Fill in your information below to continue.</p>
              <StaticForm staticModalToggle={modalTwoToggle} />
            </div>
          </CommonModal>
        </div>
      </div>
    </Col>
  );
};

export default ModalTwo;
