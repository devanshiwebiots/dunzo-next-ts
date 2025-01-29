import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import { DropdownWithHeader } from '../Common/DropdownWithHeader'
import { ImagePath, TodayTasksTitle } from '@/Constant/constant'
import { MonthlyDropdownList, TodayTasksHead, TodayTasksTable } from '@/Data/General/Dashboard/DashboardData'
import TableHead from '../Common/TableHead'
import Link from 'next/link'
import Image from 'next/image'

export const TodayTasks=()=> {
    return (
        <Col xl="5" lg="5">
            <Card className="today-task">
                <DropdownWithHeader headerClass='pb-0' heading={TodayTasksTitle} dropDownClass='icon-dropdown' dropDownList={MonthlyDropdownList} dropDownIcon={true} />
                <CardBody className="clients-project">
                    <div className="table-responsive custom-scrollbar">
                        <Table className=" display">
                            <TableHead headData={TodayTasksHead} />
                            <tbody>
                                {TodayTasksTable.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <Link href="/project/project_list">
                                                <p>{item.paragraph}</p>
                                            </Link>
                                        </td>
                                        <td>
                                            <div className="user-details customers">
                                                <ul>
                                                    {item.customers.map((list) => (
                                                        <li className="d-inline-block" key={list.id}>
                                                            <Image priority width={25} height={25} src={`${ImagePath}/dashboard-3/user/${list.image}`} alt="user" />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </td>
                                        <td>{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
