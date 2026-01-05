import React from "react";
import { ChevronDown } from "react-feather";
import { InboxOptions } from "./InboxOptions";
import { UserBody } from "./UserBody";
import { UserFooter } from "./UserFooter";
import { MailPropsType } from "@/Types/EmailType";
import Image from "next/image";
import { ImagePath, Send } from "@/Constant/constant";
import { Button } from "reactstrap";

export const UserMail: React.FC<MailPropsType> = ({ handlePrint }) => {
  return (
    <div className="user-mail-wrapper">
      <div className="user-title">
        <div>
          <div className="rounded-border">
            <Image width={38} height={38} className="img-fluid" src={`${ImagePath}/user/12.png`} alt="user" priority unoptimized/>
          </div>
          <div className="dropdown-subtitle">
            <p>{"Jacob Jones"}</p>
            <div className="onhover-dropdown">
              <Button color="transparent" className="p-0 dropdown-button">{"To me"} <ChevronDown /></Button>
              <div className="inbox-security onhover-show-div">
                <p>{"From: "}<span>{"jones"} &lt;{"jacobjones3@gmail.com"}&gt;</span></p>
                <p>{"to: "}<span>{"donut.horry@gmail.com"}</span></p>
                <p>{"reply-to: "}<span>&lt;{"jacobjones3@gmail.com"}&gt;</span></p>
                <p>{"date: "}<span>{"Jul 13, 2023, 7:10 AM"}</span></p>
                <p>{"subject: "}<span>{"Important Account Security Update"}</span></p>
                <p>{"security: "}<span>{"standard encryption (TLS)"}</span></p>
              </div>
            </div>
          </div>
        </div>
        <InboxOptions handlePrint={handlePrint} />
      </div>
      <UserBody />
      <UserFooter />
      <div className="send-btn">
        <Button color="primary">{Send}<i className="fa fa-paper-plane"></i></Button>
      </div>
    </div>
  );
};
