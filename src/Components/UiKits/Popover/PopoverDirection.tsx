import { PopoverDirections, PopoverOnTop } from "@/Constant/constant";
import { DirectionData, DirectionList } from "@/Data/Uikits/Popover/PopoverData";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import CommonPopover from "./Common/CommonPopover";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const PopoverDirection = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={PopoverDirections} subTitle={DirectionData} headClass="pb-0" />
        <CardBody className="common-flex popover-wrapper">
          <Button color="warning" className="example-popover mb-0 me-0" id="Popover-4">{PopoverOnTop}</Button>
          <Popover isOpen={popover} toggle={toggle} placement="top" target="Popover-4" trigger="click">
            <PopoverHeader>Popover On Top</PopoverHeader>
            <PopoverBody>Popovers need the tooltip plugin considering that a dependency.</PopoverBody>
          </Popover>
          {DirectionList.map((data) => (
            <CommonPopover key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PopoverDirection;
