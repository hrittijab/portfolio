import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import "../styles/layout.css";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="topbar">
        <button
        className="menu-btn"
        onClick={() => setSidebarOpen(prev => !prev)}
        >

          <Menu size={22} />
        </button>

        <div className="topbar-title">HB</div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main-content">
        <div className="content-wrapper">
            <Outlet />
        </div>
        </main>

    </>
  );
}
