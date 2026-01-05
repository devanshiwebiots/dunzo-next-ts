import { EmailFilter, Href, ImagePath, Inbox, Markjenco, NewMail } from "@/Constant/constant";
import { EmailSidebarList } from "@/Data/Applications/Email/EmailData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Badge, Button, Card, CardBody, Nav, NavItem } from "reactstrap";

export const EmailLeftAside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandle = () => setIsOpen(!isOpen)

  return (
    <div className="md-sidebar">
      <Button color="primary" className="md-sidebar-toggle" onClick={onClickHandle}>{EmailFilter}</Button>
      <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? "open" : ""}`}>
        <div className="email-left-aside">
          <Card>
            <CardBody>
              <div className="email-app-sidebar">
                <div className="d-flex align-items-center">
                  <div className="media-size-email">
                    <Image width={52} height={52} className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="" priority unoptimized/>
                  </div>
                  <div className="flex-grow-1">
                    <h3>{Markjenco}</h3>
                    <p>{"Markjecno@gmail.com"}</p>
                  </div>
                </div>
                <Nav className="main-menu">
                  <NavItem> 
                    <Link href="/email/email_compose" className="btn-primary btn-block btn-mail w-100">
                      <i className="icofont icofont-envelope me-2"></i> {NewMail}
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="show" href="/email/letter_box">
                      <span className="title">
                        <i className="icon-import"></i> {Inbox}
                      </span>
                      <Badge color="transparent" className="pull-right">{"(236)"}</Badge>
                    </Link>
                  </NavItem>
                  {EmailSidebarList.map((item) => (
                    <li key={item.id}>
                      {!item.line ? (
                        <Link href={Href}>
                          <span className="title"><i className={`icon-${item.icon}`}></i>{item.title}</span>
                          {item.badge && (<Badge color="transparent" className="pull-right">({item.badge})</Badge>)}
                        </Link>
                      ) : (item.line)}
                    </li>
                  ))}
                </Nav>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
