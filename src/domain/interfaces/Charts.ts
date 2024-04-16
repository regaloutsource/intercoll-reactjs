import type { ChartData, ChartOptions } from 'chart.js';

export interface LineProps {
    options: ChartOptions<'line'>;
    data:ChartData<'line'>
}

export interface BarProps {
    options: ChartOptions<'bar'>;
    data:ChartData<'bar'>
}

export interface DoughnutProps {
    options: ChartOptions<'doughnut'>;
    data:ChartData<'doughnut'>
}

export interface ScatterProps {
    options: ChartOptions<'scatter'>;
    data:ChartData<'scatter'>
}
