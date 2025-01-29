import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { HeadingDropdowns, Href, Party } from "@/Constant/constant";
import { HeadingDataList } from "@/Data/Uikits/DropDown/DropDownData";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const HeadingDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={HeadingDropdowns} subTitle={HeadingDataList} headClass="pb-0" />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="success" className="rounded-pill text-white">{Party}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem header className="fw-bold fs-6" href={Href}>Party List</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem href={Href}>Balloons</DropdownItem>
                  <DropdownItem href={Href}>Cake</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadingDropdown;
