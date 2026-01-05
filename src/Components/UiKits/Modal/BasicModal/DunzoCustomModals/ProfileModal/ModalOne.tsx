import { ClickOut, ImagePath } from "@/Constant/constant";
import { useState } from "react";
import { Button, Col } from "reactstrap";
import { CommonRihoModalTitle } from "../Common/CommonRihoModalTitle";
import { ProfileModal } from "./ProfileModal";
import Image from "next/image";

export const ModalOne = () => {
  const [modalOne, setModalOne] = useState(false);
  const modalOneToggle = () => setModalOne(!modalOne);

  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="Riho-demo-img">
          <CommonRihoModalTitle heading="Modal 1 -" subHeading="Profile Modal" text="Example of Riho dashboard profile card." />
          <div className="overflow-hidden">
            <Image priority width={482} height={263} className="image-fluid" src={`${ImagePath}/alert/social.png`} alt="social" unoptimized/>
            <Button color="primary" className="mx-auto mt-3" onClick={modalOneToggle}>{ClickOut}</Button>
          </div>
          <ProfileModal modalOne={modalOne} modalOneToggle={modalOneToggle} />
        </div>
      </div>
    </Col>
  );
};
