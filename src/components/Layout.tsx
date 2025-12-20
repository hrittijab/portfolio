import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main
        style={{
          marginLeft: 220,
          padding: "80px 40px",
          width: "100%",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
