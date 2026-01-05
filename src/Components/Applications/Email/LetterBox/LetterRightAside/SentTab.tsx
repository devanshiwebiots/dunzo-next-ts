import SVG from "@/CommonComponent/SVG/Svg";
import { ImagePath } from "@/Constant/constant";
import { SentEmailData } from "@/Data/Applications/Email/EmailData";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handleEnvelope, handleInterview } from "@/Redux/Reducers/LetterBoxSlice";
import Image from "next/image";
import { useState } from "react";
import { Badge, FormGroup, Input, Label } from "reactstrap";

export const SentTab = () => {
  const dispatch = useAppDispatch();
  const { faIcon } = useAppSelector((state) => state.email);
  const [fillState, setFillState] = useState<{ [key: number]: boolean }>({}); const handleValue = (index: number) => {
    const newFillState = { ...fillState };
    newFillState[index] = !newFillState[index];
    setFillState(newFillState);
  };
  const handleOpenValue = () => dispatch(handleInterview(true));

  return (
    <div className="mail-body-wrapper">
      <ul>
        {SentEmailData.map((item, i) => (
          <li className="inbox-data" key={i}>
            <div className="inbox-user">
              <FormGroup className="m-0" check inline>
                <Input className={`checkbox-${item.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                <Label check htmlFor={`emailCheckbox${i}`} />
              </FormGroup>
              <SVG className={`important-mail ${fillState[i] ? "active" : ""}`} iconId="fill-star" onClick={() => handleValue(i)}  />
              <div className="rounded-border">
                {item.image && <Image width={38} height={38} src={`${ImagePath}/user/${item.image}`} alt="user" priority unoptimized/>}
                {item.shortName && (<div className={item.color === "success" ? "circle-success" : ""}><p className={`txt-${item.color}`}>{item.shortName}</p></div>)}
              </div>
              <p>{item.name}</p>
            </div>
            <div className="inbox-message" >
              <div className="email-data" onClick={handleOpenValue}>
                <span>{item.message}<span>{item.subMessage}</span></span>
                <span className="d-flex">{item.badge && item.badge.map((data, j) => (<Badge color="" className={`inbox-width lh-0 badge-light-${data.color}`} key={j}>{data.title}</Badge>))}</span>
              </div>
              <div className="email-timing"><span>{item.time}</span></div>
              <div className="email-options">
                <i className={`fa fa-envelope-o envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))} />
                <i className={`fa fa-envelope-open-o envelope-2 ${faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
                <i className="fa fa-trash-o trash-3" />
                <i className="fa fa-print" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};