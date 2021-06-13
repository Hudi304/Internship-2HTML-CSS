import "../../../../common-components/common.scss"
import "./login-left.component.scss"

import { useHistory } from "react-router";

// const history = useHistory()

export default function LoginLeft()  : JSX.Element  {
    const history = useHistory();

    const changeRoute = ()  => {
        const path = `/account`;
        history.push(path);
    }

    return (
        <div className="grid-item login-container debug">
            <span className="login-container2">

                <div className="login-title debug">
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
                        <label className="login-form-label debug" >Username*</label><br/>
                        <input className="login-input login-input1 debug" type="text" id="fname" name="fname" value="jennifer.s@gmail.com"/><br/>
                        <label className="login-form-label debug" >Password*</label><br/>
                        <input className="login-input login-input2 debug" type="password" id="lname" name="lname" value="12345678"/><br/>
                        <a className="forgot-password debug" href="url" >Forgot Password?</a>
                    </form>
                    <br/>
                </div>

                <div className="login-button-container debug">
                    <button className="login-button debug" onClick={ changeRoute } >
                        Login to Paradise
                    </button>   
                </div>
            </span>
        </div>
    )
}

