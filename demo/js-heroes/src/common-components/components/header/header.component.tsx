import React from "react";
// import logo from "../../../assets/techquarter-logo-mark-outline-rgb.png"

import "./header.component.scss"

// import logo from "../../../assets/techquarter-logo-mark-outline-rgb.png"

export default function Header(){
    return (
        <div className="header-container">
            <div className="header-left debug">
                <span className="icon-container debug">
                        {/* <img src={logo} alt="TQ"></img> */}
                </span>
            </div>

            <div className="header-right debug">
            </div>
        </div>
    )   
}