import {
  Home,
  User,
  FolderKanban,
  GraduationCap,
  Briefcase,
  Mail,
  Code,
  HeartHandshake,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const navItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "About", to: "/about", icon: User },
  { label: "Projects", to: "/projects", icon: FolderKanban },
  { label: "Skills", to: "/skills", icon: Code },
  { label: "Courses", to: "/courses", icon: GraduationCap },
  { label: "Work", to: "/work", icon: Briefcase },
  { label: "Volunteering", to: "/volunteering", icon: HeartHandshake },
  { label: "Contact", to: "/contact", icon: Mail },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Clickable Logo */}
      <NavLink to="/" className="sidebar-logo">
        HB
      </NavLink>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <div className="nav-icon">
              <Icon size={18} />
            </div>
            <div className="nav-label">{label}</div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
