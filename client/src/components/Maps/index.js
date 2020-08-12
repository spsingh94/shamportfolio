import React from "react";
import "./style.css";

export function Maps(props){

    return(
<iframe
className="google-maps-frame"
title="google-maps"
width="95%"
height="650"
frameborder="0"
allowfullscreen
{...props}
/>
    )
}

