import SVG from "@/CommonComponent/SVG/Svg";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const ChatDropMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="dropdown-form">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
        <DropdownToggle color="transparent" className="dropdown-toggle dropdown-form p-0 border-0 bg-transparent w-auto"><i className="icon-plus" /></DropdownToggle>
        <DropdownMenu className="chat-icon">
          <DropdownItem tag={'div'} className="mb-2"><SVG iconId="camera" /></DropdownItem>
          <DropdownItem tag={'div'}><SVG iconId="attchment" /></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ChatDropMenu;