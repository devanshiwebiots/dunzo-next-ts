import { ApexOptions } from "apexcharts";

export interface TotalEarningCardProp {
    colClass?: string;
}

export interface CommonHeaderWithDropdownProps {
    heading?: string;
    dropDownList: string[];
    headerClass?: string;
    dropDownTitle?: string;
    headingClass?: string;
    caret?: boolean;
    dropDownClass?: string;
    dropDownIcon?: boolean;
}

export interface CustomerCardDataProps {
    id: number;
    color: string;
    divClass: string;
    title: string;
    rate: string;
    icon: string;
    percent: number;
    bodyClass?: string;
}

export interface CustomerCardMainProp {
    data: CustomerCardDataProps[];
}

interface LeadsStatusDataItem {
    id: number;
    text?: string;
    class?: string;
    image?: string;
}

export interface LeadsStatusProps {
    id: number;
    child: LeadsStatusDataItem[];
};

interface SeriesItem {
    name: string;
    data: number[];
}

interface ChartItems {
    series: SeriesItem[];
    height?: number | undefined;
}

export interface OnlineOrderCardTypes {
    id: number;
    colClass: string;
    headerClass: string;
    color: string;
    icon: string;
    arrowColor: string;
    percent: string;
    text: string;
    rate: string;
    chart: ChartItems;
    chartClass?: string;
}

export interface OnlineOrderMainProp {
    data: OnlineOrderCardTypes[];
}

export interface TotalEarningCardProp {
    colClass?: string;
}

export interface CommonHeaderWithDropdownProps {
    heading?: string;
    dropDownList: string[];
    headerClass?: string;
    dropDownTitle?: string;
    headingClass?: string;
    caret?: boolean;
    dropDownClass?: string;
    dropDownIcon?: boolean;
}

export interface RecentOrderTableProps {
    [key: string]: string | number;
    id: number;
    productImage: string;
    productName: string;
    productCode: string;
    customerName: string;
    customerCode: string;
    date: string;
    statusColor: string
    statusText: string;
    total: string
}

export interface CustomComponentProps {
    src?: string;
    name?: string;
    text?: string;
    color?: string;
    value?: number;
}


interface CommentItems {
    id: number;
    icon: string;
    spanText: string;
}

interface CustomerItems {
    id: number;
    image: string;
}

interface WebCardData {
    id: number;
    divClass?: string;
    color: string;
    icon: string;
    title: string;
    text: string;
    comment: CommentItems[];
    customers: CustomerItems[];
    progressValue: number;
}

export interface WebCardProps {
    item: WebCardData;
}

export interface CustomApexOptions extends ApexOptions {
    dropShadow: {
        enabled: boolean;
        top: number;
        left: number;
        bottom: number;
        blur: number;
        color: string;
        opacity: number;
    };
}

export interface TableHeadType {
    class?: string;
    name: string;
}

export interface TableHeaderProp {
    headData: TableHeadType[]
}