import React from "react";
import Digit from "./Digit/Digit";

const CountDown = (props)=> {
    
    return (
        <div className="d-flex">
            <Digit color="palegreen" /> 
            <Digit  color="skyblue"/> 
            <Digit  color="salmon"/> 
        </div>
    )
}


export default CountDown;