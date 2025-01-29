import React from 'react'
import { Card, CardBody, Col, Progress } from 'reactstrap'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { MonthlyTarget, StatisticsTitle, WeeklyTarget } from '@/Constant/constant'
import { MonthlyDropdownList } from '@/Data/General/Dashboard/DashboardData'

export const StatisticsCard=()=> {
    return (
        <Col xl="12" md="6" className="pe-0">
            <Card className="statistics">
                <DropdownWithHeader headerClass='card-no-border pb-0' heading={StatisticsTitle} dropDownList={MonthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody>
                    <div className="d-flex pt-1 pb-1">
                        <div className="flex-shrink-0">
                            <h4>{WeeklyTarget}</h4><span>{'25% achieved'}</span>
                            <Progress color='primary' value={50} />
                        </div>
                        <div className="flex-grow-1">
                            <h4>{MonthlyTarget}</h4><span>{'40% achieved'}</span>
                            <Progress color='warning' value={85} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}