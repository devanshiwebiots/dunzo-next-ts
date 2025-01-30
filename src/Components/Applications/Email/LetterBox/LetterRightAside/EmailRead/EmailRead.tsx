import React, { useRef } from "react";
import { Card } from "reactstrap";
import { useReactToPrint } from "react-to-print";
import { MailBody } from "./MailBody";
import { UserMail } from "./UserMail/UserMail";
import { useAppSelector } from "@/Redux/Hooks";

export const EmailRead = () => {
  const { interviewEmail } = useAppSelector((state) => state.email);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });
  
  return (
    <Card className={`email-body email-read ${interviewEmail ? "show" : "hide"}`}>
      <MailBody />
      <div className="mail-body-wrapper" ref={contentRef}>
        <UserMail handlePrint={handlePrint} />
      </div>
    </Card>
  );
};
