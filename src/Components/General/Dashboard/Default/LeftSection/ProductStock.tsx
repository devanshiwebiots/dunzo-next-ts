import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { ProductStockTitle } from '@/Constant/constant'
import { ProductOptions, MonthlyDropdownList } from '@/Data/General/Dashboard/DashboardData'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'

export const ProductStock=()=> {
    return (
        <Col xl="12" md="6" className="col-xl-50 box-col-6">
            <Card className="product-chart mb-0">
                <DropdownWithHeader headerClass='pb-0' heading={ProductStockTitle} dropDownList={MonthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody className="pb-0">
                    <div className="d-flex">
                        <h2 className="me-2">{'($1,23,456)'}</h2><span>{'Total Product Stock'}</span>
                    </div>
                    <div className="product-chart">
                        <div className="shap-block">
                            <div className="rounded-shap animate-bg-secondary"><i></i><i></i></div>
                        </div>
                        <div id="product-chart">
                            <ReactApexChart type='area' options={ProductOptions} series={ProductOptions.series} height={350} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
