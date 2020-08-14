import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Button (props) {

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior:"smooth"})
    };

return(
    <Link className="btn btn-primary" onClick={scrollTop} to={props.to} {...props}>{props.children}</Link>
    )
}

export default Button;