import React from "react";
import {
    BarElement, LineElement, CategoryScale, LinearScale, PointElement,
    Tooltip, Legend, Title
} from "chart.js";
import ChartJS from "chart.js/auto";
import "./dashboard.css";
import DashboardCards from "../../../components/ui/dashboard/dashboard-card/dashboard-card";
import DashboardChart from "../../../components/ui/dashboard/dashboard-chart/dashboard-chart";

ChartJS.register(BarElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

const Dashboard: React.FC = () => {
    return (
        <div className="container py-2">
            <DashboardCards />
            <DashboardChart />
        </div>
    );
};

export default Dashboard;
