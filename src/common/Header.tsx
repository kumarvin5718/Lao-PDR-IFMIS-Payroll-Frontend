import React from 'react';
import logo from "../assets/logo.png";
import "../style/Header.css";

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <header className="header-bar bg-white shadow-sm px-3 py-2 border-bottom">

            <div className="d-flex justify-content-between align-items-center">

                {/* ✅ LEFT: Logo + Title */}
                <div className="d-flex align-items-center gap-3">

                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "55px" }}
                    />

                    <div className="lh-1">
                        <h6 className="fw-bold mb-1 text-primary">
                            {title}
                        </h6>
                        <small className="text-muted">
                            {subtitle}
                        </small>
                    </div>

                </div>

                {/* ✅ RIGHT: Optional Admin / System Info */}
                <div className="text-end lh-1">

                    <div className="fw-semibold small">
                        Lao PDR Government
                    </div>

                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                        Payroll Management System
                    </small>

                </div>

            </div>
        </header>
    );
};

export default Header;