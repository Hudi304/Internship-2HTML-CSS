import { ProfilePic } from "./account-profile-pic/account-profile-pic";
import "./account-profile-form.componet.scss"

import backgroudImage from "../../../../assets/shifaaz-shamoon-okVXy9tG3KY-unsplash.jpg"
import profilePicture from "../../../../assets/amonfUS.png"
import { FormItem } from "./account-form-item/account-form-item";
import { DefaultButtom } from "../../../../common-components/components/button/button.component";
import FormDropDownItem from "./account-form-drop-down/account-form-drop-down";

import { TextBox } from "../../../../common-components/components/text-box/text-box";


export default function AccountBody() : JSX.Element  {
    return (
        <div className="user-profile-container debugON">

            <ProfilePic profilePicture={profilePicture} backgroudImage={backgroudImage} />
            
            <div className="profile-form debug">
                <FormItem type="text" label="First Name*" defaultText="Jennifer" />
                <FormItem type="text" label="Middle Name" defaultText="Enter name" />
                <FormItem type="text" label="Last Name*" defaultText="Smith" />

                
                <FormItem type="text" label="Email*" defaultText="jennifer.s@gmail.com" />
                <FormItem type="text" label="Phone Number*" defaultText="Jennifer" />
                <FormItem type="text" label="Fax" defaultText="Jennifer" />
                

                <FormItem type="text" label="Address*" defaultText="Jennifer"/>
                <FormDropDownItem id="cityInput" label="City*" defaultText="Jennifer"/>
                <FormDropDownItem id="stateInput" label="State*" defaultText="Jennifer" />

                <FormItem type="text" label="Zip Code*" defaultText="Jennifer"/>
                <FormDropDownItem id="countryInput" label="Country*" defaultText="Jennifer" />
                
                <TextBox type="text" label="Zip Code*" defaultText="Jennifer" />

                <div className="profile-form-item"></div>

                <div className="profile-form-item line"><hr/></div>
                <div className="profile-form-item line"></div>
                <div className="profile-form-item line"></div>
                {/* <!-- * CHANGE PASSWORD --> */}

                <div className="profile-form-item change-password-title">
                    <label className="change-password-label debug-profile"><b>Change Password</b></label><br/>
                </div>
                {/* <!-- ? FORM  --> */}

                <FormItem type="password" label="Old Password*" defaultText="jennifer.s@gmail.com" />
                <FormItem type="password" label="New Password*" defaultText="jennifer.s@gmail.com" />
                <FormItem type="password" label="Re-type Password*" defaultText="jennifer.s@gmail.com"/>

                <DefaultButtom text="Save Changes"/>

           </div>
            

        </div>
    )

}