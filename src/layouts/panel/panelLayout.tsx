import React, { useState } from 'react';
import SuperAdminSidebar from '../../components/layouts/sidebar/super-admin-sidebar/SuperAdminSidebar';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '../../components/layouts/sidebar/admin-sidebar/AdminSidebar';
import TopBar from '../../components/layouts/topbar/topbar';

// Temporary user object (this would usually use from a context or an API)
const user = {
  role: "1",           // "0" = Admin, "1" = Super Admin
  fname: "طه عارف",
  rank: "خدنگ"         // User rank or title
};

// Layout component for the panel section of the app
const PanelLayout: React.FC = () => {
  const location = useLocation(); // Get current route path for active-menu-button

  return (
    <div className="panel-container p-4 py-2 rtl">

      <TopBar />

      <div className="panel-body d-flex">
        {/* 
        Render different sidebar components based on user role.
        */}
        {
          user.role === "0" ?
            (<AdminSidebar currentRoute={location.pathname} userfname={user.fname} userrank={user.rank} />)
            :
            (<SuperAdminSidebar currentRoute={location.pathname} userfname={user.fname} userrank={user.rank} />)
        }

        <div className="panel-main-content">
          <Outlet /> {/* Main content area where nested routes will be rendered */}
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
