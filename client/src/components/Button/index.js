import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export function Button (props) {

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior:"smooth"})
    };

return(
    <Link className="btn btn-primary" onClick={scrollTop} to={props.to} {...props}>{props.children}</Link>
    )
}

export function OtherButton (props) {
return <a className="btn btn-primary" {...props}>{props.children}</a>
}