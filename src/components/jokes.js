import React from "react";

function jokes(Props) {

    return (
        <div>
        <ul>
            <li>Question: {Props.gag.joke}</li>
            <li>Answer: {Props.gag.answer}</li>
        </ul>
        </div>
    )
}

export default jokes