import React from "react";
import "./style.css";

export function Input(props) {
    return (
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder={props.placeholder}/>
    )
}