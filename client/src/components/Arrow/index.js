import React from "react";
import "./style.css";

export function Arrow(props) {
    
    const scrollDown = () => {
        window.scrollTo({top: 700, behavior:"smooth"})
    };

    return(
        <svg
        width="50px"
        height="50px"
        viewBox="0 0 16 16"
        className="bi bi-arrow-down-circle-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"

        onClick={scrollDown}
      >
        <path
          fillRule="evenodd"
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
        />
        {props.children}
      </svg>
    )
}