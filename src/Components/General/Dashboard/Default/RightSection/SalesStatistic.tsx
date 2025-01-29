import React, { Fragment } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { SalesStatisticTitle, SeeMore, ViewCount } from '@/Constant/constant'
import { MonthlyDropdownList, SalesOptions } from '@/Data/General/Dashboard/DashboardData'

export const SalesStatistic=()=> {
    const colorType = ['primary', 'light-primary']

    return (
        <Col xl="4" md="4" className="col-dash-40 box-col-6 proorder-xl-1">
            <Card className="sales">
                <DropdownWithHeader headerClass='card-no-border pb-0' heading={SalesStatisticTitle} dropDownList={MonthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody>
                    <div id="sales-chart">
                        <ReactApexChart options={SalesOptions} series={SalesOptions.series} type='donut' height={292} />
                    </div>
                    <div className="d-flex">
                        {colorType.map((item, index) => (
                            <Fragment key={index}>
                                <div className="flex-shrink-0 me-2"><span className={`bg-${item}`}></span></div>
                                <div className={`flex-grow-1 ${index === 0 ? 'me-2' : ''}`}>
                                    <h5>{ViewCount} <strong>{'340k'}</strong></h5>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <p>{"Keep up info updated to increase the number of ionteractions"}</p>
                    <Button color='transparent'>{SeeMore}</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
