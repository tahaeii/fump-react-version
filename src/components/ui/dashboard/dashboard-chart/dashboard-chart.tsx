import React from "react";
import { Chart } from "react-chartjs-2";
import { chartData, chartOptions } from "../../../../types/dashboard/dashborad-chart.data";

const DashboardChart: React.FC = () => {
    return (
        <div className="row mt-4">
            <div className="chart-wrapper">
                <div className="chart-container" style={{ position: 'relative', height: '400px' }}>
                    <Chart type="bar" data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

export default DashboardChart;
