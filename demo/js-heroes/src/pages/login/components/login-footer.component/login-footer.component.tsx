import React from "react";

import sponsor1 from "../../../../assets/Microsoft.png"
import "../../../../common-components/common.scss"
import "./login-footer.component.scss"


export default function LoginFooter(){
    return (
        <div className="footer debug">
            <img className="footer-icon debug" src={sponsor1} alt="TQ"/>
        </div>
            
      
    )   
}