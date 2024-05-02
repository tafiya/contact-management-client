import { useState } from "react";
import DashboardHome from "../components/dashboard/DashboardHome";
import Sidebar from "../components/dashboard/Sidebar";
import { Toaster } from "react-hot-toast";


const Dashboard = () => {
    const [sidebarToggle, setSidebarToggle]= useState(false);
    return (
        <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle}></Sidebar>
        <DashboardHome sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}></DashboardHome>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default Dashboard;