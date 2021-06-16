import { ProfilePic } from './account-profile-pic/account-profile-pic';
import './account-profile-form.componet.scss';

import backgroudImage from '../../../../assets/shifaaz-shamoon-okVXy9tG3KY-unsplash.jpg';
import profilePicture from '../../../../assets/amonfUS.png';
import { FormItem } from '../../../../common-components/components/form-input/from-input';
import { DefaultButtom } from '../../../../common-components/components/button/button.component';
import FormDropDownItem from '../../../../common-components/components/input-drop-down/input-drop-down';

import { TextBox } from '../../../../common-components/components/text-box/text-box';
import { useState } from 'react';

const data = ['Bucharest', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Botosani'];
const states = ['Alabama', 'Alaska', 'Arizona'];
const countries = ['United States of America', 'Romania', 'France', 'Spain', 'Germany'];

export interface FormObj {
  firstName: string;
  middleName: string;
  lastName: string;

  email: string;
  phoneNumber: string;
  fax: string;

  address: string;
  city: string;
  state: string;

  zipCode: string;
  country: string;

  oldPassword: string;
  newPassword: string;
  reNewpassword: string;
}

const fromObjInit: FormObj = {
  firstName: '',
  middleName: '',
  lastName: '',

  email: '',
  phoneNumber: '',
  fax: '',

  address: '',
  city: '',
  state: '',

  zipCode: '',
  country: '',

  oldPassword: '',
  newPassword: '',
  reNewpassword: ''
};

export default function AccountBody(): JSX.Element {
  const [fromObj, setFromObj] = useState<FormObj>(fromObjInit);

  function onChange(eTargetValue: string, key: string) {
    const update: FormObj = { ...fromObj, [key]: eTargetValue };
    setFromObj(update);
  }

  return (
    <div className="user-profile-container debugON">
      <ProfilePic profilePicture={profilePicture} backgroudImage={backgroudImage} />

      <div className="profile-form debug">
        <FormItem type="text" label="First Name*" defaultText="Jennifer" />
        <FormItem type="text" label="Middle Name" defaultText="Enter name" />
        <FormItem type="text" label="Last Name*" defaultText="Smith" />

        <FormItem type="text" label="Email*" defaultText="jennifer.s@gmail.com" />
        <FormItem type="text" label="Phone Number*" defaultText="(091)121 5577" />
        <FormItem type="text" label="Fax" defaultText="" />

        <FormItem type="text" label="Address*" defaultText="Main Street 15" />
        <FormDropDownItem id="cityInput" options={data} label="City*" defaultText="Jennifer" />
        <FormDropDownItem id="stateInput" options={states} label="State*" defaultText="Jennifer" />

        <TextBox
          id="zipCode"
          formObj={fromObj}
          setFromObj={setFromObj}
          label="Zip Code*"
          type="text"
          defaultText="Jennifer"
          enableHide={false}
          value={ fromObj.address }
        />
        <FormDropDownItem label="Country*" id="stateInput" options={countries} defaultText="Jennifer" />

        <div className="profile-form-item"></div>

        <div className="profile-form-item line">
          <hr />
        </div>
        <div className="profile-form-item line"></div>
        <div className="profile-form-item line"></div>
        {/* <!-- * CHANGE PASSWORD --> */}

        <div className="profile-form-item change-password-title">
          <label className="change-password-label debug-profile">
            <b>Change Password</b>
          </label>
          <br />
        </div>
        {/* <!-- ? FORM  --> */}

        {/* <TextBox id="oldPass" type="password" label="Old Password*" formObj={ fromObj } defaultText="jennifer.s@gmail.com" enableHide={true} />
                <TextBox id="newPass" type="password" label="New Password*"  formObj={ fromObj } defaultText="jennifer.s@gmail.com"  enableHide={true}/>
                <TextBox id="reNewPass" type="password" label="Re-type Password*" formObj={ fromObj } defaultText="jennifer.s@gmail.com" enableHide={true}/> */}

        <DefaultButtom formObj={fromObj} text="Save Changes" />
      </div>
    </div>
  );
}
