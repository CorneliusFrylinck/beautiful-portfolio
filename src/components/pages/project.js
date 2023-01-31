import React from "react";

export default function Project(props) {
    return(
        <div className="project">
            <img src={props.url} alt={props.alt}/>
        </div>
    )
}