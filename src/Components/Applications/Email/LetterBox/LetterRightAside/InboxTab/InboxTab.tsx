import SVG from "@/CommonComponent/SVG/Svg";
import { ImagePath } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addToFavorites, handleEnvelope, handleInterview, removeItems } from "@/Redux/Reducers/LetterBoxSlice";
import Image from "next/image";
import { Badge, FormGroup, Input, Label } from "reactstrap";
import { MailPagination } from "./Pagination";

export const InboxTab = ()=> {
  const dispatch = useAppDispatch();
  const { page, inboxEmail, faIcon } = useAppSelector((state) => state.email);
  const handleValue = () => dispatch(handleInterview(true));
  const handleRemoveEmail = (id: number) => dispatch(removeItems(id));

  return (
    <div className="mail-body-wrapper">
      <ul>
        {inboxEmail.map((item, i) => (
          <li className={`inbox-data ${page ? (i < 7 ? "hidden" : "") : i < 7 ? "" : "hidden"}`} key={i}>
            <div className="inbox-user">
              <FormGroup className="m-0" check inline>
                <Input className={`checkbox-${item.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                <Label check htmlFor={`emailCheckbox${i}`} />
              </FormGroup>
              <SVG className={`important-mail ${item.star ? "active" : ""}`} iconId="fill-star" onClick={() => dispatch(addToFavorites(item))} />
              <div className="rounded-border">
                {item.image && <Image width={38} height={38} src={`${ImagePath}/user/${item.image}`} alt="user" priority unoptimized/>}
                {item.shortName && (
                  <div className={item.color === "success" ? "circle-success" : ""}>
                    <p className={`txt-${item.color}`}>{item.shortName}</p>
                  </div>
                )}
              </div>
              <p>{item.name}</p>
            </div>
            <div className="inbox-message">
              <div className="email-data" onClick={handleValue}>
                <span>{item.message}<span>{item.subMessage}</span></span>
                {item.badge && item.badge.map((data, i) => (<Badge color="" className={`inbox-width badge-light-${data.color}`} key={i}>{data.title}</Badge>))}</div>
              <div className="email-timing"><span>{item.time}</span></div>
              <div className="email-options">
                <i className={`fa fa-envelope-o envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))} />
                <i className={`fa fa-envelope-open-o envelope-2 ${faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
                <i className="fa fa-trash-o trash-3" onClick={() => handleRemoveEmail(item.id)} />
                <i className="fa fa-print" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <MailPagination />
    </div>
  );
}
