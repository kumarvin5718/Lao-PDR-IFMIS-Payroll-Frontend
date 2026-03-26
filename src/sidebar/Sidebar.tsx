
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "react-bootstrap-icons";
import logo from "../assets/logo.png";
import "../style/Sidebar.css";
/**
 * Props:
 *  - menuItems: [{ label, link?, icon?, children?: [{ label, link?, icon? }] }]
 */
type MenuItem = {
  label: string;
  link?: string;
  icon?: React.ReactNode;
  children?: { label: string; link?: string; icon?: React.ReactNode }[];
};

const Sidebar: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
  // Track open indices of parent menu items
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggleIndex = (idx: number) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  // Optional: close all on route change (leave commented if you want menus to stay open)
  // const location = useLocation();
  // useEffect(() => setOpenSet(new Set()), [location.pathname]);

  return (
    <nav
      className="sidebar-container"
      style={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "#0d3b66"
      }}
    >
      {/* Sticky Header */}
      <div className="sidebar-header-sticky">
        <div className="text-center p-2">
          <img
            src={logo}
            alt="Government Logo"
            className="img-fluid rounded-circle mb-1"
            style={{
              height: 50,
              width: 50,
              objectFit: "contain",
              border: "2px solid #ddd",
              padding: 3
            }}
          />
          <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#fff" }}>
            LAO PDR
          </div>
          <div style={{ fontSize: "0.65rem", color: "#ddd" }}>
            IFMIS
          </div>
        </div>
      </div>

      {/* Menu */}
      <ul className="nav flex-column p-2" id="sidebar-accordion">
        {menuItems.map((item, idx) => {
          const isOpen = openSet.has(idx);

          if (item.children?.length) {
            return (
              <li key={idx} className="nav-item mb-1">
                <button
                  className="btn w-100 d-flex justify-content-between align-items-center text-start"
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`sb-react-collapse-${idx}`}
                >
                  <span style={{ fontSize: "0.85rem" }} className="text-white">
                    {item.icon && <span className="me-2">{item.icon}</span>}
                    {item.label}
                  </span>
                  <ChevronDown
                    className="text-white"
                    style={{
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                    aria-hidden="true"
                  />
                </button>

                {/* Animated collapse (pure React + CSS) */}
                <AnimatedCollapse isOpen={isOpen} id={`sb-react-collapse-${idx}`}>
                  <ul className="nav flex-column ms-3 mt-2">
                    {item.children.map((child, cIdx) => (
                      <li key={cIdx} className="nav-item">
                        <NavLink
                          to={child.link || "#"}
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active fw-semibold" : "text-white"}`
                          }
                          style={{ fontSize: "0.7rem" }}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </AnimatedCollapse>
              </li>
            );
          }

          // Simple link item
          return (
            <li key={idx} className="nav-item mb-1">
              <NavLink
                to={item.link || "#"}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center ${isActive ? "active fw-semibold" : "text-white"}`
                }
                style={{ fontSize: "0.8rem" }}
              >
                {item.icon && <span className="me-2">{item.icon}</span>}
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;

/**
 * AnimatedCollapse
 * A small helper to animate show/hide height with CSS, without Bootstrap JS.
 */
const AnimatedCollapse: React.FC<{ isOpen: boolean; id?: string; children: React.ReactNode }> = ({
  isOpen,
  id,
  children
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (isOpen) {
      const fullHeight = el.scrollHeight;
      setHeight(fullHeight);
      // After transition ends, set height to 'auto' for flexible content growth
      const done = () => {
        if (isOpen) setHeight(-1); // -1 will represent 'auto'
      };
      el.addEventListener("transitionend", done, { once: true });
    } else {
      // If currently auto, snap to full height first, then to 0 to animate closing
      if (height === -1) {
        setHeight(el.scrollHeight);
        requestAnimationFrame(() => setHeight(0));
      } else {
        setHeight(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const style: React.CSSProperties =
    height === -1
      ? { height: "auto", overflow: "hidden", transition: "height 0.2s ease" }
      : { height, overflow: "hidden", transition: "height 0.2s ease" };

  return (
    <div id={id} ref={ref} style={style} aria-hidden={!isOpen}>
      {/* Inner wrapper to measure scrollHeight correctly */}
      <div>{children}</div>
    </div>
  );
};
