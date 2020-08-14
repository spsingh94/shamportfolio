import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Button (props) {
return(
    <Link className="btn btn-primary" to={props.to} {...props}>{props.children}</Link>
    )
}

export default Button;
{/* <a type="button" className="btn btn-primary" {...props}>{props.children}</a> */}