import { Href, ImagePath } from "@/Constant/constant";
import { OrganizationData } from "@/Data/Applications/Contacts/ContactsData";
import { NavOrgPropType } from "@/Types/ContactType";
import Image from "next/image";
import { useState } from "react";
import { Col, Nav, NavItem, NavLink } from "reactstrap";

const NavOrg :React.FC<NavOrgPropType> = ({ callback }) => {
  const [organizationTab, setOrganizationTab] = useState("1");
  const handleTabs = (tab: string) => {
    setOrganizationTab(tab);
    callback(tab);
  };

  return (
    <Col xl="4" md="5" className="xl-50">
      <Nav pills className="flex-column">
        {OrganizationData.map((item) => (
          <NavItem id="myTab" key={item.id}>
            <NavLink href={Href} className={organizationTab === item.activeTab ? "active" : ""} onClick={() => handleTabs(item.activeTab)}>
              <div className="d-flex">
                <Image width={50} height={50} className="p-0 img-50 img-fluid m-r-20 rounded-circle" src={`${ImagePath}/user/${item.image}`} alt="Image" priority/>
                <div className="flex-grow-1">
                  <h3>{item.name}</h3>
                  <p>{item.email}</p>
                </div>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  );
};

export default NavOrg;
