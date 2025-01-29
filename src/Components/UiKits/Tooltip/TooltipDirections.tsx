import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";
import { DirectionsTooltip, TooltipOnTop } from "@/Constant/constant";
import { DirectionTooltipData, DirectionTooltipList } from "@/Data/Uikits/Tooltip/TooltipData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const TooltipDirections = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={DirectionsTooltip} subTitle={DirectionTooltipData} headClass="pb-0" />
        <CardBody>
          <div className="common-flex">
            <Button color="primary" id="Tooltip-8" className="mb-0 me-0">{TooltipOnTop}</Button>
            <Tooltip placement="top" isOpen={tooltip} target="Tooltip-8" toggle={toggle}>Tooltip on top</Tooltip>
            {DirectionTooltipList.map((item) => (
              <CommonTooltip key={item.id} item={item} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TooltipDirections;
