/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { ImagePath, NewCustomersTitle } from '@/Constant/constant'
import { MonthlyDropdownList, NewCustomersTableData } from '@/Data/General/Dashboard/DashboardData'
import Image from 'next/image'
import Link from 'next/link'

export const NewCustomers=()=> {
    return (
        <Col xl="12" className="pe-0">
            <Card className="new-customers">
                <DropdownWithHeader headerClass='pb-0' heading={NewCustomersTitle} dropDownList={MonthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody>
                    <div className="table-responsive custom-scrollbar">
                        <Table className="display" width={100}>
                            <tbody>
                                {NewCustomersTableData.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex">
                                                <img src={`${ImagePath}/dashboard-2/user/${item.src}`} alt="" />
                                                <div className="flex-grow-1 ms-2">
                                                    <Link href="/users/user_profile">
                                                        <span>{item.name}</span>
                                                        <h5>{item.mail}</h5>
                                                    </Link>
                                                </div>
                                                <div className="active-status active-online"></div>
                                            </div>
                                        </td>
                                        <td>{item.brand}</td>
                                        <td>{item.date}</td>
                                        <td>{'$'}{item.price}</td>
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
