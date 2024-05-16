import React from "react";

function Note(props){
    return(
        <note className="note">
           <h1>{props.title}</h1>
           <p>{props.description}</p> 
        </note>
    )
}

export default Note;