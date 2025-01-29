import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { SalesOverviewTitle } from '@/Constant/constant'
import { MonthlyDropdownList, SalesOverviewOptions } from '@/Data/General/Dashboard/DashboardData'

export const SalesOverview=()=> {
    return (
        <Col xxl="9" md="8" className="box-col-6 proorder-xl-8 col-xl-80">
            <Card className="sales overview">
                <DropdownWithHeader headerClass='card-no-border pb-0' heading={SalesOverviewTitle} dropDownList={MonthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody className="p-0">
                    <div className="sales-chart">
                        <div className="shap-2">
                            <div className="rounded-shap animate-bg-secondary"><i></i><i></i></div>
                        </div>
                        <div className="shap-2">
                            <div className="rounded-shap animate-bg-secondary"><i></i><i></i></div>
                        </div>
                        <div className="shap-2">
                            <div className="rounded-shap animate-bg-secondary"><i></i><i></i></div>
                        </div>
                        <div className="shap-2">
                            <div className="rounded-shap animate-bg-secondary"><i></i><i></i></div>
                        </div>
                        <div id="sales-overview">
                            <ReactApexChart options={SalesOverviewOptions} series={SalesOverviewOptions.series} type='line' height={270} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
