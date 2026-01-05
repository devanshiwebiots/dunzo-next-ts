import { EmailAddress, General } from "@/Constant/constant";
import { PrintPreviewPropsType } from "@/Types/ContactType";
import Image from "next/image";

const PrintPreview = (({ selectedUser,ref }: PrintPreviewPropsType) => {
  return (
    <div className="profile-mail pt-0" id="DivIdToPrint" ref={ref}>
      <div className="d-flex align-items-center">
        <Image width={50} height={50} className="img-100 img-fluid m-r-20 rounded-circle" src={`${selectedUser.avatar}`} alt="" priority unoptimized/>
        <div className="flex-grow-1 mt-0">
          <h5>
            <span id="printname">{selectedUser.name}</span>
            <span id="printlast">{selectedUser.surname}</span>
          </h5>
          <p id="printmail">{selectedUser.name}{"@gmail.com"}</p>
        </div>
      </div>
      <div className="email-general">
        <h6>{General}</h6>
        <p>{EmailAddress}:<span className="font-primary f-w-600" id="mailadd">{selectedUser.surname}{"@gmail.com"}</span>
        </p>
      </div>
    </div>
  );
});

export default PrintPreview;
