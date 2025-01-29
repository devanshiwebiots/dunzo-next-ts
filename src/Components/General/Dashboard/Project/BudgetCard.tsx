import React from 'react'
import { Card, CardBody } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { TotalEarningCardProp } from '@/Types/DashboardType'
import { DropdownWithHeader } from '../Common/DropdownWithHeader'
import { BudgetCardTitle, BudgetSpent } from '@/Constant/constant'
import { BudgetCardData, BudgetOptions, MonthlyDropdownList } from '@/Data/General/Dashboard/DashboardData'
import Link from 'next/link'
import SVG from '@/CommonComponent/SVG/Svg'


export const BudgetCard : React.FC<TotalEarningCardProp> = ({colClass})=> {
    return (
        <div className={colClass}>
            <Card className="budget-card">
                <DropdownWithHeader headerClass='pb-0' heading={BudgetCardTitle} dropDownClass='icon-dropdown' dropDownList={MonthlyDropdownList} dropDownIcon={true} />
                <CardBody>
                    <div className="budget-spent"><span>{BudgetSpent}</span>
                        <h2>{'$ 65,847.00'}</h2>
                    </div>
                    {BudgetCardData.map((item) => (
                        <Link href="/learning/learning_list" key={item.id}>
                            <div className="d-flex">
                                <div className={`design-score bg-light-${item.color}`}>
                                    <SVG className={item.iconClass ? item.iconClass : ''} iconId={item.icon} />
                                </div>
                                <div className="flex-grow-1">
                                    <h6>{item.title}</h6><span>{'$'}{item.price}</span>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="design-menu"> <i className="fa fa-angle-right"></i></div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </CardBody>
                <CardBody className="p-0">
                    <div className="budget-chart" id="budget-chart">
                        <ReactApexChart options={BudgetOptions} series={BudgetOptions.series} type='area' height={120} />
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
