import { PopoverOffset50, PopoverOffsets } from "@/Constant/constant";
import { OffsetData, OffsetList } from "@/Data/Uikits/Popover/PopoverData";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import CommonPopover from "./Common/CommonPopover";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const PopoverOffset = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={PopoverOffsets} subTitle={OffsetData} headClass="pb-0" />
        <CardBody className="common-flex popover-wrapper">
          <Button color="secondary" className="example-popover mb-0 me-0" id="Popover-8">{PopoverOffset50}</Button>
          <Popover placement="right-start" isOpen={popover} target="Popover-8" toggle={toggle}>
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>{`And here's some amazing content. It's very engaging. Right?`}</PopoverBody>
          </Popover>
          {OffsetList.map((data, index) => (
            <CommonPopover key={index} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PopoverOffset;
