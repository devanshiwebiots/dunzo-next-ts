import { Href, Primary, RoundedDropdowns } from "@/Constant/constant";
import { RoundedDataList, RoundedList } from "@/Data/Uikits/DropDown/DropDownData";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const RoundedDropdown = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
  
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={RoundedDropdowns} subTitle={RoundedDataList} headClass="pb-0" />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="primary" className="rounded-pill">{Primary}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem href={Href}>Dark</DropdownItem>
                  <DropdownItem href={Href}>Light</DropdownItem>
                  <DropdownItem href={Href}>Lighter</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {RoundedList.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
};

export default RoundedDropdown;