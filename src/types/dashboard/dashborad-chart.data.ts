import { DashboardChartData, DashboardChartOptions } from "./dashborad-chart.types";

export const chartData: DashboardChartData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    datasets: [
        {
            type: 'bar' as const,
            label: 'درآمد',
            data: [150, 180, 200, 170, 190, 220, 210, 230, 250, 240, 260, 280],
            backgroundColor: '#287EE6',
            stack: 'combined',
            borderRadius: 4,
        },
        {
            type: 'line' as const,
            label: 'سود',
            data: [50, 70, 90, 60, 80, 100, 95, 110, 120, 130, 140, 160],
            borderColor: '#FF9800',
            backgroundColor: '#FF9800',
            tension: 0.4,
            yAxisID: 'y',
        },
    ],
};

export const chartOptions: DashboardChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom' as const,
            labels: {
                padding: 20,
                font: { size: 14, family: 'pinar' },
                color: '#333',
            },
        },
        tooltip: {
            rtl: true,
            backgroundColor: '#fff',
            borderColor: '#ccc',
            borderWidth: 1,
            titleColor: '#000',
            bodyColor: '#000',
            callbacks: {
                label: (context: any) => ` مقدار: ${context.raw}`,
            },
            titleFont: { family: 'pinar', size: 14, weight: 'bold' as const },
            bodyFont: { family: 'pinar', size: 12 },
        },
        title: {
            display: true,
            text: 'نمودار درآمد و سود سالانه',
            font: { size: 18, family: 'pinar', weight: 'bold' as const },
            color: '#444',
            padding: { bottom: 10 },
        },
    },
    scales: {
        x: {
            stacked: true,
            ticks: {
                font: { family: 'pinar' },
                color: '#444',
            },
            grid: { display: false },
        },
        y: {
            stacked: false,
            ticks: {
                font: { family: 'pinar' },
                color: '#444',
            },
            grid: {
                color: 'rgba(0,0,0,0.05)',
            },
        },
    },
};
