import React from 'react';
import { Link } from 'react-router-dom';

interface SuperAdminSidebarProps {
    currentRoute: string;
    userfname: string;
    userrank: string;
}

const SuperAdminSidebar: React.FC<SuperAdminSidebarProps> = ({ currentRoute, userfname, userrank }) => {
    const superAdminMenu = [
        {
            type: 'group',
            title: 'مدیریت شرکت‌ها',
            icon: 'fa-calendar-lines-pen',
            tabs: [
                { label: 'شرکت‌های ما', component: '', icon: 'fa-building' },
                { label: 'ایجاد شرکت جدید', component: 'create-company', icon: 'fa-plus-circle' },
            ],
        },
        {
            type: 'group',
            title: 'مدیریت محتوا',
            icon: 'fa-building',
            tabs: [
                { label: 'مدیریت وبلاگ', component: 'cms/create-blog', icon: 'fa-newspaper' },
                { label: 'مدیریت پروژه‌ها', component: '', icon: 'fa-file-alt' },
                { label: 'مدیریت تیم‌ها', component: '', icon: 'fa-users' },
                { label: 'ایجاد موقعیت شغلی', component: '', icon: 'fa-rectangle-history-circle-user' },
            ],
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
            route: '/alert-box-write',
        },
    ];

    return (
        <div className="sidebar">
            <Link to="/dashboard" className={`menu-button ${currentRoute === '/dashboard' ? 'active-tab' : ''}`}>
                <i className="fa-duotone fa-light fa-grid-2 ms-2"></i> داشبورد
            </Link>

            {superAdminMenu.map((item, index) =>
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
                    <div>
                        <p>{userfname} <span className="small">(مدیرعامل)</span></p>
                        <p>{userrank}</p>
                    </div>
                </div>
                <div className="logout">
                    <a href="/">
                        <img src="/assets/img/logout.svg" alt="" />
                        خروج
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SuperAdminSidebar;
