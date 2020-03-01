import React from "react";

function Jokes(props) {

    return (
        <ul>
            {/* Below line is a way to check if props.gag.joke exists (!), and do something if not (&&) */}
            <b style={{display: !props.joke && "none" }}><li>Question: {props.joke}</li></b>
            <li>Answer: {props.answer}</li>
        </ul>
    )
}

export default Jokes