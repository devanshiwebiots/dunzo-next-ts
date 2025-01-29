import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { Inputs, WithInputTypes } from "@/Constant/constant";
import { WithInputData } from "@/Data/Uikits/DropDown/DropDownData";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownMenu, DropdownToggle, Input, InputGroup } from "reactstrap";

const WithInputType = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={WithInputTypes} subTitle={WithInputData} headClass="pb-0" />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="warning" className="text-white">{Inputs}</DropdownToggle>
                <DropdownMenu className="dropdown-block dropdown-wrapper dark-input-type">
                  <li>
                    <InputGroup className="rounded-0 border-0 shadow-none">
                      <div className="input-group-text">
                        <Input className="mt-0" type="checkbox" value="" />
                      </div>
                      <span>Default checkbox</span>
                    </InputGroup>
                    <InputGroup className="input-group rounded-0 border-0 shadow-none">
                      <div className="input-group-text">
                        <Input className="mt-0" type="radio" value="" />
                      </div>
                      <span>Default radio</span>
                    </InputGroup>
                  </li>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithInputType;
