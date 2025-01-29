import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { CommonCardHeader } from '../Common/CommonCardHeader'
import { MonthlyHistoryTitle } from '@/Constant/constant'
import { MonthlyHistoryOptions } from '@/Data/General/Widgets/WidgetsData'

export const MonthlyHistory=()=> {
    return (
        <Col md="12" className="box-col-12">
            <Card className="o-hidden">
                <CommonCardHeader title={MonthlyHistoryTitle} />
                <div className="bar-chart-widget">
                    <CardBody className="bottom-content">
                        <Row>
                            <Col xs="12">
                                <div id="chart-widget4">
                                    <ReactApexChart options={MonthlyHistoryOptions} series={MonthlyHistoryOptions.series} type='bar' height={380} />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </div>
            </Card>
        </Col>
    )
}
