import { CategoriesSalesData, CategoriesOptions } from '@/Data/General/Dashboard/DashboardData'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Col, Row } from 'reactstrap'

export const CategoriesSales=()=> {
    return (
        <Row className="mt-2">
            <Col xs="6" className="p-0">
                <div id="Categories-chart">
                    <ReactApexChart options={CategoriesOptions} series={CategoriesOptions.series} type='donut' height={200} />
                </div>
            </Col>
            <Col xs="6" className="categories-sales">
                {CategoriesSalesData.map((item) => (
                    <div className="d-flex gap-2" key={item.id}>
                        <div className="flex-shrink-0"><span className={`bg-${item.color}`}> </span></div>
                        <div className="flex-grow-1">
                            <h6>{item.title}</h6>
                        </div>
                        <h5>{'$'}{item.rate}</h5>
                    </div>
                ))}
            </Col>
        </Row>
    )
}
