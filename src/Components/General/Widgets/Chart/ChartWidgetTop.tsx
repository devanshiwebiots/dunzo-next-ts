import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { chartWidgetTopData } from '@/Data/General/Widgets/WidgetsData'
import { CompareLastMonth } from '@/Constant/constant'

export const ChartWidgetTop=()=> {
    return (
        <Row>
            {chartWidgetTopData.map((item) => (
                <Col xl="4" md="12" className="box-col-4" key={item.id}>
                    <Card className="o-hidden">
                        <div className="chart-widget-top">
                            <CardBody>
                                <Row className='className="pb-0 m-0'>
                                    <Col xl="9" lg="8" xs="9" className="p-0">
                                        <h3 className="mb-2">{item.title}</h3>
                                        <h4>{item.rate}</h4>
                                        <span>{CompareLastMonth}</span>
                                    </Col>
                                    <Col xl="3" lg="4" xs="3" className="text-end p-0">
                                        <h6 className="txt-success">{'+65%'}</h6>
                                    </Col>
                                </Row>
                            </CardBody>
                            <div>
                                <div className={item.id !== 1 ? 'flot-chart-placeholder' : ''}>
                                    <ReactApexChart type={item.chart.type} options={item.chart} series={item.chart.series} height={item.chart.height} />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
