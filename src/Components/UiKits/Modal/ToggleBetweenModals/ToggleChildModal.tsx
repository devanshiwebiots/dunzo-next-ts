import { AlreadyLeaving, ConnectNewRegisterAccount, ImagePath, YesLogOut } from "@/Constant/constant";
import { ToggleModalType } from "@/Types/UikitsType";
import Image from "next/image";
import Link from "next/link";
import { Button } from "reactstrap";

export const ToggleChildModal:React.FC<ToggleModalType> = ({toggleAll} ) => {

  return (
    <div className="modal-toggle-wrapper">
      <ul className="modal-img">
        <li className="text-center"><Image width={100} height={100} src={`${ImagePath}/gif/logout.gif`} alt="logout" /></li>
      </ul>
      <h4 className="pt-3 text-center">{AlreadyLeaving}</h4>
      <p className="text-center">Are you sure want to logout this dashboard?</p>
      <span className="d-block text-center mb-4">Not a member?
        <Link className="ms-1" href="/dashboard/default">{ConnectNewRegisterAccount}</Link>
      </span>
      <Button color="dark" className="d-flex m-auto" onClick={toggleAll}>{YesLogOut}</Button>
    </div>
  );
};
