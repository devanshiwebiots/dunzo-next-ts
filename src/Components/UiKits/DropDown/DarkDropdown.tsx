import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { DarkDropdowns, DarkNight, Href } from "@/Constant/constant";
import { DarkData } from "@/Data/Uikits/DropDown/DropDownData";
import React, { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DarkDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={DarkDropdowns} subTitle={DarkData} headClass="pb-0" />
        <CardBody className="dropdown-basic m-0 rtl-dropdown">
          <div className="common-flex dark-dropdown">
            <Dropdown isOpen={open} toggle={toggle}>
              <DropdownToggle caret color="dark" className="text-white">{DarkNight}</DropdownToggle>
              <DropdownMenu className="dropdown-menu-dark dropdown-block mt-1">
                <DropdownItem active header>Dark moon</DropdownItem>
                <DropdownItem href={Href}>Dark owl</DropdownItem>
                <DropdownItem href={Href}>Nightfall</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkDropdown;
