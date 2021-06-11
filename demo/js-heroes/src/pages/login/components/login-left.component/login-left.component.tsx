import React from "react";
import "../../../../common-components/common.scss"
import "./login-left.component.scss"

// import { useHistory } from "react-router";

// const history = useHistory()

export default function LoginLeft() {

   

    return (
      
        <div className="grid-item login-container debug">
            <span className="login-container2">

                <div className="title debug">
                    <b className="grad">Unlock New</b> <br/>
                    <b className="grad">Unique Challanges</b>
                </div>
                    {/* <!-- * Description --> */}
                <div className="description debug">
                    Lore ipsum dolor sit amet, consectetur adipiscing <br/>
                    elit, in maximus tempor orci et tincidunt.
                </div>

                    {/* <!-- * Log in FORM --> */}
                <div className="login-form debug">
                    <form >
                        <label className="form-label debug" >Username*</label><br/>
                        <input className="input input1 debug" type="text" id="fname" name="fname" value="jennifer.s@gmail.com"/><br/>
                        <label className="form-label debug" >Password*</label><br/>
                        <input className="input input2 debug" type="password" id="lname" name="lname" value="12345678"/><br/>
                        <a className="forgot-password debug" href="url" >Forgot Password?</a>
                    </form>
                    <br/>
                </div>


                <div className="login-button-container debug">
                    <button className="login-button debug" onClick={ handleClick } >
                        Login to Paradise
                    </button>   
                </div>
            </span>
        </div>
    )
}


function handleClick() {

    // history.push("./account")


}