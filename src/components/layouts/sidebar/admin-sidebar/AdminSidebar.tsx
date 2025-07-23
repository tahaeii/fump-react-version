import React from 'react';
import { Link } from 'react-router-dom';

interface AdminSidebarProps {
    currentRoute: string;
    userfname: string;
    userrank: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ currentRoute, userfname, userrank }) => {
    const adminMenu = [
        {
            type: 'group',
            title: 'مدیریت مجموعه',
            icon: 'fa-building',
            tabs: [
                { label: 'اطلاعات شرکت', component: '/company', icon: 'fa-briefcase' },
                { label: 'اطلاعات سهامداران', component: '', icon: 'fa-user-tie' },
                { label: 'اطلاعات کارمندان', component: '', icon: 'fa-users' },
            ]
        },
        {
            type: 'group',
            title: 'گزارشات',
            icon: 'fa-calendar-lines-pen',
            tabs: [
                { label: 'گزاش مالی', component: 'finance', icon: 'fa-file-signature' },
                { label: 'نمودار گزارشات', component: '', icon: 'fa-file-chart-column' },
            ]
        },
        {
            type: 'button',
            label: 'اطلاعات شخصی',
            icon: 'fa-user',
            route: '/profile',
        },
        {
            type: 'button',
            label: 'اعلانات',
            icon: 'fa-bell-concierge',
            route: '/alert-box-view',
        },
    ];

    return (
        <div className="sidebar">
            <Link to="/dashboard" className={`menu-button ${currentRoute === '/dashboard' ? 'active-tab' : ''}`}>
                <i className="fa-duotone fa-light fa-grid-2 ms-2"></i> داشبورد
            </Link>

            {adminMenu.map((item, index) =>
                item.type === 'group' ? (
                    <div key={index} className="menu-group">
                        <div className="group-title">
                            <i className={`fa-duotone fa-light ${item.icon} ms-2`}></i> {item.title}
                        </div>
                        {Array.isArray(item.tabs) && item.tabs.map((tab, i) => (
                            <Link
                                key={i}
                                to={`/${tab.component}`}
                                className={`menu-button ${currentRoute === '/' + tab.component ? 'active-tab' : ''}`}>
                                <i className={`fa-light ${tab.icon} ms-2`}></i> {tab.label}
                            </Link>
                        ))}
                    </div>
                ) : (
                    <Link
                        key={index}
                        to={item.route ?? '/'}
                        className={`menu-button ${currentRoute === item.route ? 'active-tab' : ''}`}>
                        <i className={`fa-duotone fa-light ${item.icon} ms-2`}></i> {item.label}
                    </Link>
                )
            )}

            <div className="sidebar-footer">
                <div className="avatar-info">
                    <img src="/assets/img/teams/aref.jpg" alt="User Avatar" className="avatar-img" />
                    <div className="avatar-text">
                        <p>{userfname} <span className="small">(ادمین)</span></p>
                        <p>{userrank}</p>
                    </div>
                </div>
                <div className="logout justify-items-end">
                    <a href="/">
                        <img src="/assets/img/logout.svg" alt="خروج" />
                        خروج
                    </a>
                </div>
            </div>
        </div>
    );

};

export default AdminSidebar;
