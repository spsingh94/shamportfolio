import React from "react";
import "./style.css";

export function ContactCard(props) {
    return(
        <form className="contact-form" action="contact-handler.php" {...props}>
            {props.children}
        </form>
    )
}