import React, { useState } from 'react'
import { FormGroup, Input, Label, Nav, NavItem, NavLink } from 'reactstrap';
import { Href } from '@/Constant/constant';
import SVG from '@/CommonComponent/SVG/Svg';
import { EmailNavTab } from '@/Data/Applications/Email/EmailData';
import { MailBody } from './MailBody';

export const MailHeader=()=> {
  const [navId,setNavId] = useState("pills-important-tab")

  return (
    <div className="mail-header-wrapper">
      <div className="mail-header">
        <FormGroup check inline>
          <Input className="checkbox-primary" id="emailCheckboxA" type="checkbox" value="option1"/>
          <Label htmlFor="emailCheckboxA" check></Label>
          <Nav className="email-tabs">
            {EmailNavTab.map((data)=>(
              <NavItem key={data.id}>
                <NavLink href={Href} className={navId === data.id ? 'active' : ''} onClick={() => setNavId(data.id)}>
                  <SVG className='stroke-icon' iconId={data.icon} />
                  <span>{data.title}</span>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </FormGroup>
      </div>
      <MailBody />
    </div>
  )
}
