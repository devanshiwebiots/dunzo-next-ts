import SVG from "@/CommonComponent/SVG/Svg";
import { ContactEditProp } from "@/Types/ChatType";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const ContactEdit: React.FC<ContactEditProp> = ({ divClass }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className={`contact-edit ${divClass ? divClass : ""}`}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="transparent" className="border-0 p-0">
          <SVG iconId="menubar" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>{"View details"}</DropdownItem>
          <DropdownItem>{"Send messages"}</DropdownItem>
          <DropdownItem>{"Add to favorites"}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
