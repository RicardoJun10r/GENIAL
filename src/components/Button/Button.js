import React from "react";
import './Button.css';

export default function Button({ label, handleClick })
{
    return(
        <button className="button-component" onClick={() => {handleClick(false)}} >{label}</button>
    )
}