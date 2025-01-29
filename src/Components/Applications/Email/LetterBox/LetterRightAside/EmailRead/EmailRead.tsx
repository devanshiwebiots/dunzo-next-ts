import React, { useRef } from "react";
import { Card } from "reactstrap";
import { useReactToPrint } from "react-to-print";
import { MailBody } from "./MailBody";
import { UserMail } from "./UserMail/UserMail";
import { useAppSelector } from "@/Redux/Hooks";

export const EmailRead = () => {
  const { interviewEmail } = useAppSelector((state) => state.email);
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Card className={`email-body email-read ${interviewEmail ? "show" : "hide"}`}>
      <MailBody />
      <div className="mail-body-wrapper" ref={componentRef}>
        <UserMail handlePrint={handlePrint} />
      </div>
    </Card>
  );
};
