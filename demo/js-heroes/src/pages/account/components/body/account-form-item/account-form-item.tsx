import React from "react";

import "./account-form-item.scss"

interface AccountProfileFormProps{
    label : string
    defaultText: string
    type: string
    
}


export function FormItem(props : AccountProfileFormProps) {
    return (
        <div className="profile-form-item debug">
            <label className="form-label debug">{ props.label }</label><br/>
            <input className="input input1 debug" type={props.type} id="fname" name="fname" value={ props.defaultText}/><br/>
        </div>
        
    )
}