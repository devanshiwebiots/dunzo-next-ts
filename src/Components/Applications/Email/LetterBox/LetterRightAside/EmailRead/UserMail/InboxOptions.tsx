import SVG from "@/CommonComponent/SVG/Svg";
import { Href } from "@/Constant/constant";
import { MailPropsType } from "@/Types/EmailType";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const InboxOptions: React.FC<MailPropsType> = ({ handlePrint }) => {
  const [fill, setFill] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="inbox-options">
      <span>{"Friday 07 Apr (4 hours ago)"}</span>
      <div className="light-square" onClick={() => setFill(!fill)}>
        <SVG className={`important-mail ${fill ? "active" : ""}`} iconId="mail-star" />
      </div>
      <div className="light-square" onClick={handlePrint}>
        <SVG iconId="print" />
      </div>
      <div className="light-square btn-group">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent" dir="left" className="border-0">
            <SVG iconId="menubar" className="mt-1" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-block">
            <DropdownItem href={Href}><i className="fa fa-mail-reply"></i>{"Reply"}</DropdownItem>
            <DropdownItem href={Href}><i className="fa fa-mail-forward"></i>{"Forward"}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
