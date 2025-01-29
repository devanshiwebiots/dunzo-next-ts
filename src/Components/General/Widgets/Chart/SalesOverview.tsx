import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { DropdownWithHeader } from '../../Dashboard/Common/DropdownWithHeader'
import { SalesOverviewTitle, Today } from '@/Constant/constant'
import { DailyDropdownList } from '@/Data/General/Widgets/WidgetsData'
import { SalesOverviewOptions } from '@/Data/General/Dashboard/DashboardData'

export const SalesOverview=()=> {
    return (
        <Col xl="6" lg="12" className="box-col-6 col-xl-50">
            <Card>
                <DropdownWithHeader headerClass='pb-0' dropDownTitle={Today} heading={SalesOverviewTitle} caret={true} dropDownClass='card-header-right-icon' dropDownList={DailyDropdownList} />
                <CardBody>
                    <div className="chart-container progress-chart">
                        <div id="sales-overview-2">
                            <ReactApexChart options={SalesOverviewOptions} series={SalesOverviewOptions.series} type='line' height={335}/>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
