import SVG from "@/CommonComponent/SVG/Svg";
import { ImagePath } from "@/Constant/constant";
import { BalanceData } from "@/Data/Uikits/Modal/ModalData";
import { BalanceModalType } from "@/Types/UikitsType";
import Image from "next/image";
import Link from "next/link";
import { Badge, Card, CardBody, Col, Modal } from "reactstrap";

export const BalanceModal:React.FC<BalanceModalType> = ({ modalThird, modalThirdToggle: modalThirdToggle }) => {

  return (
    <Modal centered fade isOpen={modalThird} toggle={modalThirdToggle}>
      <Col xl="12">
        <Card className="balance-box mb-0">
          <CardBody>
            <div className="balance-profile">
              <div className="balance-img">
                <Image priority width={40} height={40} className="image-fluid" src={`${ImagePath}/dashboard/profile.png`} alt="user vector" unoptimized/>
                <Link className="edit-icon" href="/app/users/profile"><SVG iconId="pencil" /></Link>
              </div>
              <span className="f-light d-block">Your Balance</span>
              <h5 className="mt-1">$768,987.90</h5>
              <ul>
                {BalanceData.map(({ title, text, data, icon, color }, index) => (
                  <li key={index}>
                    <div className={`balance-item ${color}`}>
                      <div className="balance-icon-wrap"><div className="balance-icon">{icon}</div></div>
                      <div>
                        <span className="f-12 f-light">{title}</span><h5
                        >{text}</h5><Badge color={`light-${color}`} className={`rounded-pill text-${color}`}>{data}</Badge>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Modal>
  );
};
