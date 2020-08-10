import React from "react";
import "./style.css";

export function ContactCard(props) {
    return(
        <div className="contact-card" {...props}>
            {props.children}
        </div>
    )
}