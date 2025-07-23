export type ChartType = 'bar' | 'line';

export interface DashboardChartDataset {
    type: ChartType;
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    tension?: number;
    yAxisID?: string;
    stack?: string;
    borderRadius?: number;
}

export interface DashboardChartData {
    labels: string[];
    datasets: DashboardChartDataset[];
}

export interface DashboardChartOptions {
    responsive: boolean;
    maintainAspectRatio: boolean;
    plugins: any;
    scales: any;
}
