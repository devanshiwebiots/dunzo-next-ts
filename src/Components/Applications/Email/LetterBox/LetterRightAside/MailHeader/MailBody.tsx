import { Href } from "@/Constant/constant";
import { MailBodyItems } from "@/Data/Applications/Email/EmailData";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from "reactstrap";

export const MailBody = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const toggle = () => setOpenDrop(!openDrop);

  return (
    <div className="mail-body">
      <div className="mail-search d-flex-align-items-center">
        <Input type="text" placeholder="Search..." />
        <i className="fa fa-search"></i>
      </div>
      <div className="light-square">
        <i className="fa fa-refresh"></i>
      </div>
      <div className="light-square">
        <i className="fa fa-trash"></i>
      </div>
      <Dropdown isOpen={openDrop} toggle={toggle}>
        <DropdownToggle color="transparent" dir="left" className="light-square border-0 p-0">
          <i className="fa fa-ellipsis-v"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-block">
          {MailBodyItems.map((item, index) => (<DropdownItem href={Href} key={index}>{item}</DropdownItem>))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
