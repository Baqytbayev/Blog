import React from "react";
import './Other.css'


const Other = (props) => {
    return (
        <div className={'Other'}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}
export default Other;