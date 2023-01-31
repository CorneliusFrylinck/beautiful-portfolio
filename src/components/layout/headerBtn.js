import React from "react";

export default function HeaderBtn(props) {
    return (
        <a className="header-btn" href={props.link}><span>{props.description}</span></a>
    )
}