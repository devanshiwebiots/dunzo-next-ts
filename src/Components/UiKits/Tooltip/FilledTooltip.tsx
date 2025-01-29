import { FilledTooltips, TooltipInfo } from "@/Constant/constant";
import { FillTooltipData, FillTooltipList } from "@/Data/Uikits/Tooltip/TooltipData";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const FilledTooltip = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FilledTooltips} subTitle={FillTooltipData} headClass="pb-0" />
        <CardBody>
          <div className="common-flex">
            <Button outline color="primary" id="Tooltip-16" className="mb-0 me-0">{"Tooltip Primary"}</Button>
            <Tooltip isOpen={tooltip} toggle={toggle} placement="top" target="Tooltip-16">Tooltip Primary</Tooltip>
            {FillTooltipList.map((data) => (
              <CommonTooltip key={data.id} outline={true} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FilledTooltip;
