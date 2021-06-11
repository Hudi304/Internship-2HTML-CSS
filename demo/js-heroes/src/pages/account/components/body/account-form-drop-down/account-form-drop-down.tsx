import { DropDownArrow } from "../../../../svgs";
import "./account-form-drop-down.scss"
import ListItem from "./list-item-component/list-item-component";


interface DropDownFormItemProps{
    label: string
    defaultText: string
    id: string
   
}

//? ar trebui sa trimit data ca props ?
let data = ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța","Botosani"];

export default function FormDropDownItem(props : DropDownFormItemProps) {
    return (
        <div className="profile-form-drop-down-item debug1">

            <label className="form-label debug">{props.label}</label><br />

            <div className="dropdown debug1">

               

                <input id={props.id} className="drop-down-input debug" value={props.defaultText} />
               
                <div className="arrow-row ">
                    <div className=" arrow">
                        <DropDownArrow></DropDownArrow>
                    </div>
                </div>
              
                
                <div className="dropdown-content">
                    <nav className="scrollbar">
                        <ul className="list">
                            {data.map(item => (
                                <ListItem parentID={props.id} content={item}></ListItem>
                            ))}
                        </ul>
                    </nav>
                </div>

            </div>

        </div>
      
    );
}

// ! CONTROL COMPONENTS NU FI PROST