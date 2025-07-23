import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import PanelLayout from '../../layouts/panel/panelLayout';
import Dashboard from './dashboard/dashboard';

export default function Panel() {
    const user = { role: "0" };

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />

            <Route path="/" element={<PanelLayout />}>
                <Route path="dashboard" element={["0", "1"].includes(user.role) ? <Dashboard /> : <Navigate to="/" />} />
            </Route>
        </Routes>
    );
}