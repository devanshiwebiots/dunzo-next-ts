import React, { useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { Button, Tooltip, UncontrolledTooltip } from "reactstrap";
import { ButtonSmall, Href, PopoverModal, TooltipsAndPopovers, TooltipsModal } from "@/Constant/constant";
import Link from "next/link";

export const ToolTipAndPopover = () => {
  const [toolAndPopover, setToolAndPopover] = useState(false);
  const tooltipsAndPopoversToggle = () => setToolAndPopover(!toolAndPopover);
  const [tooltipLink, setTooltipLink] = useState(false);
  const toggleLink = () => setTooltipLink(!tooltipLink);
  const [tooltipLinkOne, setTooltipLinkOne] = useState(false);
  const toggleLinkOne = () => setTooltipLinkOne(!tooltipLinkOne);
  const [tooltipLinkTwo, setTooltipLinkTwo] = useState(false);
  const toggleLinkTwo = () => setTooltipLinkTwo(!tooltipLinkTwo);

  return (
    <>
      <Button color="info" onClick={tooltipsAndPopoversToggle}>{TooltipsAndPopovers}</Button>
      <CommonModal centered={true} fade={true} isOpen={toolAndPopover} toggle={tooltipsAndPopoversToggle} title="Tooltip and Popover Modal">
        <h5>{PopoverModal}</h5>
        <p className="mt-2">
          {`This `}
          <Button color="success" className="popover-test" id="TooltipExample" title="this is amazing content">{ButtonSmall}</Button>
          {` triggers a popover on click.`}
        </p>
        <UncontrolledTooltip placement="top" target="TooltipExample" isOpen={tooltipLink} toggle={toggleLink}>Tooltip</UncontrolledTooltip>
        <hr />
        <h5>{TooltipsModal}</h5>
        <p className="mt-2">
          <Link className="tooltip-test text-info" href={Href} id="TooltipExample1">{` This link `}</Link>
          <UncontrolledTooltip placement="top" target="TooltipExample1" isOpen={tooltipLinkOne} toggle={toggleLinkOne}>Tooltip</UncontrolledTooltip>
          and
          <Link className="tooltip-test text-info" href={Href} id="TooltipExample2">{` that link `}</Link>
          <UncontrolledTooltip placement="top" target="TooltipExample2" isOpen={tooltipLinkTwo} toggle={toggleLinkTwo}>Tooltip</UncontrolledTooltip>
          have tooltips on hover.
        </p>
      </CommonModal>
    </>
  );
};
