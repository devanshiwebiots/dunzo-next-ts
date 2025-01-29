import React, { useState } from "react";
import { DividerDropdowns, Href, Wishlist } from "@/Constant/constant";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";
import { DividerData, DividerSortData } from "@/Data/Uikits/DropDown/DropDownData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const DividerDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={DividerDropdowns} subTitle={DividerData} headClass="pb-0" />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="success" className="rounded-pill text-white">{Wishlist}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem href={Href}>Shoes</DropdownItem>
                  <DropdownItem href={Href}>Bag</DropdownItem>
                  <DropdownItem href={Href}>Clothes</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href={Href}>Separated link</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {DividerSortData.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DividerDropdown;
