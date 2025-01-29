import { AreaChartTitle1, AreaChartTitle2, BarChart2Title, ColumnChartTitle1, ColumnChartTitle2, LineChartTitle, PieChart, WordTreeTitle } from "@/Constant/constant";
import { GoogleChartData } from "@/Data/ChartsData/GoogleChartData";
import { CommonChart } from "../Common/CommonChart";
import { ComboChart } from "./ComboChart";
import { GanttChart } from "./GanttChart";

export const ChartLists = () => {
  return (
    <>
      <CommonChart data={GoogleChartData.areaChart1} bodyClass="p-0" title={AreaChartTitle1} />
      <CommonChart data={GoogleChartData.areaChart2} bodyClass="p-0" title={AreaChartTitle2} />
      <CommonChart data={GoogleChartData.columnChart1} title={ColumnChartTitle1} />
      <CommonChart data={GoogleChartData.columnChart2} title={ColumnChartTitle2} />
      <GanttChart />
      <CommonChart data={GoogleChartData.lineChart} title={LineChartTitle} colClass="col-sm-12 box-col-12" />
      <ComboChart />
      <CommonChart data={GoogleChartData.barChart2} title={BarChart2Title} colClass="col-sm-12 col-xl-6 box-col-12" />
      <CommonChart data={GoogleChartData.wordTreeChart} divClass="word-tree" title={WordTreeTitle} colClass="col-sm-12 col-xl-6 box-col-12" />
      <CommonChart data={GoogleChartData.pieChart1} bodyClass="p-0" title={`${PieChart} 1`} />
      <CommonChart data={GoogleChartData.pieChart2} bodyClass="p-0" title={`${PieChart} 2`} />
      <CommonChart data={GoogleChartData.pieChart3} bodyClass="p-0" title={`${PieChart} 3`} />
      <CommonChart data={GoogleChartData.pieChart4} bodyClass="p-0" title={`${PieChart} 4`} />
    </>
  );
};
