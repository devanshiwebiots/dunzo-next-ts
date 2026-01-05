import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { DefaultToasts, ImagePath } from "@/Constant/constant";
import { DefaultToastData } from "@/Data/BonusUi/Toast/ToastData";
import Image from "next/image";
import { useState } from "react";
import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";

const DefaultToast = () => {
  const [open, setOpen] = useState(true);

  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={DefaultToasts} subTitle={DefaultToastData} />
        <CardBody className="toast-rtl">
          <Toast className="default-show-toast" isOpen={open}>
            <div className="toast-header toast-img">
              <Image priority width={30} height={30} className="rounded me-2" src={`${ImagePath}/dashboard-8/profile.png`} alt="profile" unoptimized/>
              <strong className="me-auto">Dunzo theme</strong>
              <small className="d-sm-block d-none">10 min ago</small>
              <Button close className="p-0" onClick={() => setOpen(false)}></Button>
            </div>
            <ToastBody className="toast-dark"><strong className="txt-success">Well done!</strong> You successfully read this important message.</ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultToast;
