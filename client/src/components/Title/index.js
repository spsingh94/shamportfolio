import React from "react";
import "./style.css";

export function Title(props) {
return <p className="connect-header" {...props}>{props.children}</p>
}