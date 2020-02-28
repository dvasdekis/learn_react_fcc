import React from "react";

function Main() {
    //Return the JSX you want the functional component to produce
    return (
        <main>
            <div>
                <input type="checkbox" />
                <p>Some text I write</p>
                <input type="checkbox" />
                <p>Some text I write</p>
                <input type="checkbox" />
                <p>Some text I write</p>
            </div>
        </main>
    )
} // You can only return a single JSX element. Wrap it in a div if you need more than one thing.

export default Main
