import React from "react";


interface DeafaultButtonProps{
    text : string
}



export function DefaultButtom(props : DeafaultButtonProps) {


    return (    
        <div className="change-password-button-container">
            <button className="save-button debug" >
                { props.text }
            </button>
        </div>
    )
}