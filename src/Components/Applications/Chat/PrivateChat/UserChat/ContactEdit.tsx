import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import { DropClassTypes } from "@/Types/ChatType";
import SVG from "@/CommonComponent/SVG/Svg";

const ContactEdit: React.FC<DropClassTypes> = ({ dropClass }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className={`contact-edit ${dropClass}`}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="transparent" className="p-0 border-0">
          <SVG iconId="menubar" />
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>View details</DropdownItem>
          <DropdownItem>Send messages</DropdownItem>
          <DropdownItem>Add to favorites</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ContactEdit;