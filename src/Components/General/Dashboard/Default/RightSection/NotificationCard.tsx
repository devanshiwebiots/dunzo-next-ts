import { MonthlyDropdownList, NotificationCardData } from '@/Data/General/Dashboard/DashboardData';
import React, { useState } from 'react'
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader';
import { ImagePath, Notifications } from '@/Constant/constant';
import Image from 'next/image';
import Link from 'next/link';

export const NotificationCard=()=> {
    const [openStates, setOpenStates] = useState(Array(NotificationCardData.length).fill(false));

    const toggle = (index: number) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    return (
        <Col xl="12" md="6" className="notification-card">
            <Card className="custom-scrollbar">
                <DropdownWithHeader headerClass='card-no-border pb-0' heading={Notifications} dropDownList={MonthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody>
                    <ul className="notification-box">
                        {NotificationCardData.map((item) => (
                            <li className="d-flex" key={item.id}>
                                <div className="flex-shrink-0"><Image priority width={38} height={38} src={`${ImagePath}/dashboard/user/${item.image}`} alt="" /></div>
                                <div className="flex-grow-1">
                                    <Link href="/chat/private_chat">
                                        <h5>{item.title}</h5>
                                    </Link>
                                    <p>{item.text}</p>
                                </div>
                                <Dropdown isOpen={openStates[item.id]} toggle={() => toggle(item.id)} className='icon-dropdown'>
                                    <DropdownToggle color='transparent' className='border-0'><i className='icon-more-alt' /></DropdownToggle>
                                    <DropdownMenu end={true}>
                                        {MonthlyDropdownList.map((item, index) => (
                                            <DropdownItem key={index}>{item}</DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                        ))}
                    </ul>
                </CardBody> 
            </Card>
        </Col>
    )
}
