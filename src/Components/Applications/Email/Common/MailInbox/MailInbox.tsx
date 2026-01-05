import React, { useState } from "react";
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import InboxDropdown from "./InboxDropdown";
import { CallbackProp } from "@/Types/EmailType";
import { Href, ImagePath, Inbox } from "@/Constant/constant";
import Image from "next/image";
import { MailInboxData } from "@/Data/Applications/Email/EmailData";

export const MailInbox : React.FC<CallbackProp>=({ activeCallback }) =>{
  const [activeTab, setActiveTab] = useState(1);
  const handleEmails =(index:number)=> {
    setActiveTab(index + 1); 
    activeCallback(index + 1)
  }

  return (
    <Col xl="4" md="12" className="box-md-12 pr-0">
      <div className="pe-0"></div>
      <div className="email-top">
        <Row>
          <Col>
            <h3>{Inbox}</h3>
          </Col>
          <InboxDropdown />
        </Row>
      </div>
      <Nav>
        <div className="inbox custom-scrollbar">
          {MailInboxData.map((item, index) => (
            <NavItem key={index}>
              <NavLink className={`p-0 ${activeTab === index ? "active" : ""}`} href={Href} onClick={() => handleEmails(index)}>
                <div className="d-flex">
                  <div className="media-size-email">
                    <Image width={50} height={50} className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="" priority unoptimized/>
                  </div>
                  <div className="flex-grow-1">
                    <h3>{item.title}<small><span className="ps-1">({item.date}</span> {item.month} <span>{item.year})</span></small></h3>
                    <p>{"Mattis luctus. Donec nisi diam,"}</p>
                  </div>
                </div>
              </NavLink>
            </NavItem>
          ))}
        </div>
      </Nav>
    </Col>
  );
}
