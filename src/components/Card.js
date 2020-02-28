import React from "react";

// React Props (Properties) are just Function Parameters
// They take an input and return an output, like a function


//props (function input) is an object that has properties
function Card(props) {
    return (
        <div className={"Card"}>
            <img src={props.contact.imgUrl} alt={""}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
    )
}
export default Card