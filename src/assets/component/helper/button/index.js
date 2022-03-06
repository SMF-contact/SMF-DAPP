import React from "react";
import "./style.css" 
import {useNavigate  } from "react-router-dom"

function TheButton({classes,href,content}) {
    let navigate = useNavigate();
    return (
        <button type="button" onClick={() => navigate('/'+href)} className={"theme-btn "+classes}>{content}</button>
    )
}

export default TheButton;