import { UserBodyData } from "@/Data/Applications/Email/EmailData";
import React from "react";

export const UserBody = () => {
  return (
    <div className="user-body">
      {UserBodyData.map((item, index) => (
        <p key={index}>{item.text}</p>
      ))}
      <div className="mail-subcontent">
        <p>{"Yours faithfully,"}</p>
        <p>{"Account Security Team"}</p>
      </div>
    </div>
  );
};
