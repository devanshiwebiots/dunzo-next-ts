import { Alignment, Href, WarningTop } from "@/Constant/constant";
import { AlignmentDataList, AlignmentList } from "@/Data/Uikits/DropDown/DropDownData";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const Alignments = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
      <Col lg="6">
        <Card>
          <CommonCardHeader title={Alignment} subTitle={AlignmentDataList} headClass="pb-0" />
          <CardBody className="dropdown-basic m-0">
            <div className="common-flex">
              <ButtonGroup>
                <Dropdown isOpen={open} toggle={toggle} direction="up">
                  <DropdownToggle caret color="warning" className="text-white">{WarningTop}</DropdownToggle>
                  <DropdownMenu className="dropdown-block">
                    <DropdownItem href={Href}>Be careful </DropdownItem>
                    <DropdownItem href={Href}>Notifications</DropdownItem>
                    <DropdownItem href={Href}>Beware</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </ButtonGroup>
              {AlignmentList.map((data, index) => (
                <CommonDropDown item={data} key={index}/>
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    );
};

export default Alignments;
