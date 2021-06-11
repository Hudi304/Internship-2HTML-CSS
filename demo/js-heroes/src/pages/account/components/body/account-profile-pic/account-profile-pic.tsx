import React from "react";

import backgroudImage from "../../../../../assets/shifaaz-shamoon-okVXy9tG3KY-unsplash.jpg"
import profilePicture from "../../../../../assets/amonfUS.png"
import { Pen } from "../../../../svgs";


//! 

interface AccountProfilePicProps{
    profilePicture : any
    backgroudImage: any
}


export function ProfilePic( props : AccountProfilePicProps ) {
    return (
        <div className="image-grid ">
            <img className="background" src={props.backgroudImage} alt="TQ"/>

            <div  className="profile-cell"> 
                <img className="profile-picture" src={props.profilePicture} alt="TQ"/>
            </div>

            <div  className="profile-cell">
                <button className="edit-button">
                   <Pen></Pen>
                </button>
            </div>
        </div>
    )
}