import React from "react";
import "./style.css";

function Button (props) {
return(
<a type="button" className="btn btn-primary" {...props}>{props.children}</a>
)
}

export default Button;