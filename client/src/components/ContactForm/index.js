import React from "react";
import "./style.css";

export function ContactForm(props) {
    return(
        <form className="contact-form" {...props}>
            {props.children}
        </form>
    )
}