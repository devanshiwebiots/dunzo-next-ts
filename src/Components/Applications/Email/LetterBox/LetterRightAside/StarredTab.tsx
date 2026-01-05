import SVG from "@/CommonComponent/SVG/Svg";
import SearchNotFoundClass from "@/CommonComponent/SearchNotFound/SearchNotFoundClass";
import { ImagePath } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handleEnvelope, handleInterview, removeFromFavorite } from "@/Redux/Reducers/LetterBoxSlice";
import Image from "next/image";
import { Fragment } from "react";
import { Badge, FormGroup, Input, Label } from "reactstrap";

export const StarredTab = () => {
  const dispatch = useAppDispatch();
  const { inboxEmail, faIcon } = useAppSelector((state) => state.email);
  const handleOpenValue = () => dispatch(handleInterview(true));

  return (
    <div className="mail-body-wrapper">
      <ul>
        {inboxEmail.length > 0 ? (
          inboxEmail.map((data, i) => (
              <Fragment key={i}>
                {data.star && (
                  <li className="inbox-data">
                    <div className="inbox-user">
                      <FormGroup className="m-0" check inline>
                        <Input className={`checkbox-${data.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                        <Label check for={`emailCheckbox${i}`} />
                      </FormGroup>
                      <SVG className={`important-mail ${data.star ? "active" : ""}`} iconId="fill-star" onClick={() => dispatch(removeFromFavorite(data))} />
                      <div className="rounded-border">
                        {data.image && <Image width={38} height={38} src={`${ImagePath}/user/${data.image}`} alt="user" priority unoptimized/>}
                        {data.shortName && (
                          <div className={data.color === "success" ? "circle-success" : ""}><p className={`txt-${data.color}`}>{data.shortName}</p></div>
                        )}
                      </div>
                      <p>{data.name}</p>
                    </div>
                    <div className="inbox-message" >
                      <div className="email-data" onClick={handleOpenValue}>
                        <span>{data.message}<span>{data.subMessage}</span></span>
                        {data.badge && data.badge.map((item, j) => (<Badge color="" className={`inbox-width badge-light-${item.color}`} key={j}>{item.title}</Badge>))}
                      </div>
                      <div className="email-timing">
                        <span>{data.time}</span>
                      </div>
                      <div className="email-options">
                        <i className={`fa fa-envelope-o envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))} />
                        <i className={`fa fa-envelope-open-o envelope-2 ${faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
                        <i className="fa fa-trash-o trash-3" />
                        <i className="fa fa-print" />
                      </div>
                    </div>
                  </li>
                )}
              </Fragment>
            ))
          ) : (
          <SearchNotFoundClass word="Email" />
        )}
      </ul>
    </div>
  );
};
