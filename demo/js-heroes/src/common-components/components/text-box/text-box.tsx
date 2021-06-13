import './text-box.scss';
import { Eye, Eye_slash } from '../../../pages/svgs';

interface TextBoxProps {
  label: string;
  defaultText: string;
  type: string;
}

const is = true;

export function TextBox(props: TextBoxProps): JSX.Element {
  return (
    <div className="text-box-container debugTextBox">
      <label className="form-label debug">{props.label}</label>
      <br />
      <input className="input debug" type={props.type} id="fname" value={props.defaultText} />

      <div className="visibility-icon-container debugTextBox">
        <div className="visibility-icon debugTextBox">{is ? <Eye className="svg-icon"></Eye> : <Eye_slash></Eye_slash>}</div>
      </div>
    </div>
  );
}
