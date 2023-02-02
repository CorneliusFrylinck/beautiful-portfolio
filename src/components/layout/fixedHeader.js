import React from "react";
import HeaderBtn from "./headerBtn";

export default function FixedHeader() {
    return (
        <div className="fixed-header">
            <a className="home-btn" href="#main"><span>C</span></a>
            <div className="nav-container">
                <div className="header-items">
                    <HeaderBtn link="#about" description="About" />
                    <HeaderBtn link="#projects" description="Projects" />
                    <HeaderBtn link="#work" description="Experience" />
                    <HeaderBtn link="#contact" description="Contact" />
                </div>
            </div>
        </div>
    )
}