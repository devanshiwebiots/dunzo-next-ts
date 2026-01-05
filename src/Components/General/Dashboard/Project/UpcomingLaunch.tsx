import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { DropdownWithHeader } from '../Common/DropdownWithHeader'
import { DunzoAppLaunch, ImagePath, SetReminder, UpcomingLaunchTitle } from '@/Constant/constant'
import { MonthlyDropdownList } from '@/Data/General/Dashboard/DashboardData'
import Link from 'next/link'
import DynamicNumber from '@/utils/DynamicNumber'
import Image from 'next/image'

export default function UpcomingLaunch() {
    return (
        <Col xl="12">
            <Card className="upcoming-launch">
                <DropdownWithHeader headerClass='pb-0' heading={UpcomingLaunchTitle} dropDownClass='icon-dropdown' dropDownList={MonthlyDropdownList} dropDownIcon={true} />
                <CardBody>
                    <div className="meeting">
                        <div className="d-flex">
                            <h4>{DunzoAppLaunch}</h4><span>{'11:30PM'}</span>
                        </div>
                        <p>{"Anna Catmire is hosting a meeting for dunzo app launch. endeavour to be there!"}</p>
                        <div className="flex-shrink-0">
                            <Link href="/app/todo">
                                <Button color='primary'>{SetReminder}</Button>
                            </Link>
                            <div className="user-details customers">
                                <ul>
                                    {DynamicNumber(2).map((item, index) => (
                                        <li className="d-inline-block" key={index}>
                                            <Image priority width={42} height={42} src={`${ImagePath}/dashboard-3/user/${item}.png`} alt="user" unoptimized/>
                                        </li>
                                    ))}
                                    <li className="d-inline-block">
                                        <div className="light-card"><span className="f-w-500">{'+9'}</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
