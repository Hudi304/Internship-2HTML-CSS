import React from "react";

import "../../../../common-components/common.scss"

import "./account-header.component.scss"

import tqLogo from "../../../../assets/techquarter-logo-outline-rgb.png"

export default function AccountHeader(){
    return (
        <div className="header-container debug">
            <span className="icon-container debug">
                <img className="header-icon" src={tqLogo} alt="TQ"/>
            </span>
        </div>
            
      
    )   
}