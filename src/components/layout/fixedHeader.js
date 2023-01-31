import React from "react";
import HeaderBtn from "./headerBtn";

export default function FixedHeader() {
    return (
        <div className="fixed-header">
            <button className="home-btn" href="#"><span>C</span></button>
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