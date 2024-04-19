import type { ChartData, ChartOptions } from 'chart.js';

export interface LineProps {
    options: ChartOptions<'line'>;
    data:ChartData<'line'>
    size:number
}

export interface BarProps {
    options: ChartOptions<'bar'>;
    data:ChartData<'bar'>
    size:number
}

export interface DoughnutProps {
    options: ChartOptions<'doughnut'>;
    data:ChartData<'doughnut'>
    size:number
}

export interface ScatterProps {
    options: ChartOptions<'scatter'>;
    data:ChartData<'scatter'>
    size:number
}
