import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MapContainer, TileLayer } from 'react-leaflet'
import { DropdownWithHeader } from '../Common/DropdownWithHeader'
import { SaleTopCountriesTitle } from '@/Constant/constant'
import { MonthlyDropdownList, SaleTopCountriesData, WorldMapProps } from '@/Data/General/Dashboard/DashboardData'

export const SaleTopCountries=()=> {
    return (
        <Col xl="3" className="col-xl-50 box-col-6 proorder-xl-2">
            <Card className="state">
                <DropdownWithHeader headerClass='pb-0' heading={SaleTopCountriesTitle} dropDownList={MonthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon={true} />
                <CardBody className="mt-0">
                    {SaleTopCountriesData.map((data) => (
                        <ul className={`d-flex flex-row ${data.id === 2 ? 'mt-4' : ''}`} key={data.id}>
                            {data.child.map((item) => (
                                <li className={`balance-card ${item.class ? item.class : ''}`} key={item.id}>
                                    <div className="Countries"><span className="rounded-pill"></span>
                                        <h5>{item.title}</h5>
                                    </div>
                                    <h2 className="mt-1 mb-0">{item.percent}{'%'}</h2>
                                </li>
                            ))}
                        </ul>
                    ))}
                    <MapContainer className="jvector-map-height custom-map" {...WorldMapProps}>
                        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </CardBody>
            </Card>
        </Col>
    )
}
