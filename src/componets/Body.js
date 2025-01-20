import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar />
            <Outlet />
        </div>
    );
}
export default Body;