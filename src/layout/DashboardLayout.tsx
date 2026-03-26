
import React from "react";
import { Outlet } from "react-router-dom";
import { House, } from "react-bootstrap-icons";
import Sidebar from "../sidebar/Sidebar";

// Optional: set sidebar width in one place
const SIDEBAR_WIDTH = 150;

const DashboardLayout: React.FC = () => {
  const menuItems = [
    {
      label: "Dashboard",
      link: "/",
      icon: <House />,
    },

    
  

  ];

  return (
    <div>
      {/* Fixed Sidebar */}
      <aside
        style={{
          width: SIDEBAR_WIDTH,
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 1000
        }}
      >
        <Sidebar menuItems={menuItems} />
      </aside>

      {/* Main Content */}
      <main
        style={{
          marginLeft: SIDEBAR_WIDTH,
          minHeight: "100vh",
          overflowX: "auto"
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;