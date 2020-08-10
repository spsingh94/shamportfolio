import React from "react";
import "./style.css";

export function Center (props) {
    return(
        <div className="justification" {...props}>
            {props.children}
        </div>
    )
}