import SVG from "@/CommonComponent/SVG/Svg";
import { TrashEmailData } from "@/Data/Applications/Email/EmailData";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handleEnvelope, handleInterview } from "@/Redux/Reducers/LetterBoxSlice";
import React, { useState } from "react";
import { Badge, FormGroup, Input, Label } from "reactstrap";

export const TrashTab = () => {
  const [fillState, setFillState] = useState<{ [key: number]: boolean }>({});
  const dispatch = useAppDispatch();
  const { faIcon } = useAppSelector((state) => state.email);
  const handleValue = (index: number) => {
    const newFillState = { ...fillState };
    newFillState[index] = !newFillState[index];
    setFillState(newFillState);
  };
  const handleOpenValue = () => dispatch(handleInterview(true));

  return (
    <div className="mail-body-wrapper">
      <ul>
        {TrashEmailData.map((data, i) => (
          <li className="inbox-data" key={i}>
            <div className="inbox-user">
              <FormGroup className="m-0" check inline>
                <Input className={`checkbox-${data.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                <Label check htmlFor={`emailCheckbox${i}`} />
              </FormGroup>
              <SVG className={`important-mail ${fillState[i] ? "active" : ""}`} iconId="fill-star" onClick={() => handleValue(i)} />
              <div className="rounded-border">
                <div className={data.color === "success" ? "circle-success" : ""}><p className={`txt-${data.color}`}>{data.shortName}</p></div>
              </div>
              <p>{data.name}</p>
            </div>
            <div className="inbox-message">
              <div className="email-data" onClick={handleOpenValue}>
                <span>{data.message}<span>{data.subMessage}</span></span>
                <span className="d-flex">{data.badge && data.badge.map((item, j) => (<Badge color="" className={`inbox-width badge-light-${item.color}`} key={j}>{item.title}</Badge>))}</span>
              </div>
              <div className="email-timing"><span>{data.time}</span></div>
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
