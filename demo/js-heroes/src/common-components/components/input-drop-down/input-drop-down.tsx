import { useState } from "react";
import { DropDownArrow } from "../../../pages/svgs";
import "./input-drop-down.scss"
import ListItem from "./list-item-component/list-item-component";


interface DropDownFormItemProps{
    label: string
    defaultText: string
    id: string
    options : string[]
}

//? ar trebui sa trimit data ca props ?
// const data = ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Constanța","Botosani"];

export default function FormDropDownItem(props: DropDownFormItemProps): JSX.Element {
    
    const [inputState, setinputState] = useState("select something");

    function listItemOnClick(item : string){
        setinputState(item)
    }

    return (
        <div className="profile-form-drop-down-item ">
            <label className="form-label ">{props.label}</label><br />
            <div className="dropdown ">

                <input id={props.id} className="drop-down-input " defaultValue={inputState} />
               
                <div className="arrow-row ">
                    <div className=" arrow">
                        <DropDownArrow></DropDownArrow>
                    </div>
                </div>
              
                <div className="dropdown-content">
                    <nav className="scrollbar">
                        <ul className="list">
                            {props.options.map(item => (
                                // <ListItem parentID={props.id} content={item}></ListItem>
                                <li className="list-item">
                                <button className="list-button" onClick={() => listItemOnClick( item)}>
                                  {item}
                                </button>
                              </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      
    );
}


// ! CONTROL COMPONENTS NU FI PROST