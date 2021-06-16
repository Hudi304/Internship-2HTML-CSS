import './text-box.scss';
import { Eye, Eye_slash } from '../../../pages/svgs';
import { useState } from 'react';
import { FormObj } from '../../../pages/account/components/body/account-profile-form.componet';

interface TextBoxProps {
  id: string
  label: string
  defaultText: string
  type: string
  enableHide: boolean
  setFromObj: any
  formObj: FormObj
  onChange?: any
  value : string
}


export function TextBox(props: TextBoxProps): JSX.Element {
  const [isVisible, setVisible] = useState(false);
  const [inputType, setinputType] = useState(props.type);

  function hide() {
    setVisible(!isVisible)
    if (inputType == "password") {
      setinputType("text")
    }
    if (inputType == "text") {
      setinputType("password")
    }
  }

  // function onChange(eTargetValue : string, key : string) {
  //   const update : FormObj = { ...props.formObj, [key]: eTargetValue }
  //   props.setFromObj(update)
  //   props.value = 
  // }

  function onChange(eTargetValue : string, key : string) {
    props.value = eTargetValue
  }

  return (
    <div className="text-box-container debugTextBox">
      <label  className="form-label debug">{props.label}</label>
      <br />
      <input className="input debug" type={inputType} defaultValue={props.defaultText} onChange={ props.onChange} />
      <div>
        {props.enableHide ?
          <div className="visibility-icon-container debugTextBox">
            <div className="visibility-icon debugTextBox">
              <button className="text-box-button" onClick={hide}>
                {isVisible ?
                  <Eye_slash></Eye_slash>
                  : <Eye className="svg-icon"></Eye>
                }
              </button>
            </div>
          </div>
          : <div></div>}
      </div>
    </div>
  );
}







