import React from "react";
import "./style.css";

export function Title(props) {
return <h1 className="connect-header" {...props}>{props.children}</h1>
}