import SVG from "@/CommonComponent/SVG/Svg";
import { AddLabel, ComposeEmail, EmailFilter, Href } from "@/Constant/constant";
import { LetterBoxSidebar } from "@/Data/Applications/Email/EmailData";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setComposeEmail, setModal } from "@/Redux/Reducers/LetterBoxSlice";
import { LetterBoxNavType } from "@/Types/EmailType";
import React, { useState } from "react";
import { Badge, Button, Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";

export const LetterLeftAside: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const { composeEmail, inboxEmail, modal } = useAppSelector((state) => state.email);
  const dispatch = useAppDispatch();
  let starBadges = inboxEmail.filter((data) => data.star === true && 1);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Col xxl="3" xl="4" className="box-col-12">
      <div className="md-sidebar">
        <Button color="primary" className="md-sidebar-toggle" onClick={toggle}>{EmailFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar">
                  <Button color="primary" className="emailbox" onClick={() => dispatch(setComposeEmail(!composeEmail))}><i className="fa fa-plus"></i>{ComposeEmail}</Button>
                  <Nav className="main-menu email-category" pills>
                    {LetterBoxSidebar.map((data) => (
                      <NavItem key={data.id}>
                        <NavLink className={navId === data.id ? "active" : ""} id={data.id} onClick={() => setNavId(data.id)} href={Href}>
                          <SVG className={`stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
                          <div>{data.title}{data.badge && <Badge color="">{data.title === "Inbox" ? inboxEmail.length : starBadges.length}</Badge>}</div>
                        </NavLink>
                      </NavItem>
                    ))}
                    <NavItem>
                      <NavLink className="btn" href={Href} onClick={() => dispatch(setModal(!modal))}>
                        <i className="fa fa-plus"></i>{AddLabel}
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};