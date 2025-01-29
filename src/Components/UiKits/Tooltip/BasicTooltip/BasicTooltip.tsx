import { BasicTooltips, MagicPleaseHoverMe } from "@/Constant/constant";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import { InlineTooltip } from "./InlineTooltip/InlineTooltip";
import { BasicTooltipData } from "@/Data/Uikits/Tooltip/TooltipData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const BasicTooltip = () => {
  const [basicTooltip, setBasicTooltip] = useState(false);
  const toggle = () => setBasicTooltip(!basicTooltip);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicTooltips} subTitle={BasicTooltipData} headClass="pb-0" />
        <CardBody>
          <Button color="primary" className="example-popover mb-0 me-0" id="Tooltip-1">{MagicPleaseHoverMe}</Button>
          <Tooltip target="Tooltip-1" placement="top" isOpen={basicTooltip} toggle={toggle}>
            Surprise!!! Thank you for hovering...
          </Tooltip>
          <InlineTooltip />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTooltip;
