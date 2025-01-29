import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { CommonCardHeader } from '../Common/CommonCardHeader'
import { ProjectCreatedTitle } from '@/Constant/constant'
import { ProjectOptions } from '@/Data/General/Dashboard/DashboardData'

export const ProjectCreated=()=> {
    return (
        <Col xl="6" lg="12" className='box-col-6 col-xl-50'>
            <Card>
                <CommonCardHeader title={ProjectCreatedTitle} />
                <CardBody className="p-0">
                    <div className="chart-container skill-chart">
                        <div id="revenuegrowth-2">
                            <ReactApexChart options={ProjectOptions} series={ProjectOptions.series} type='area' height={355} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col >
    )
}
