import React from "react";

import Card from "./Card"

function Body() {
    return (
        <main>
            <Card contact={{name: "Mr Tuggmutt", imgUrl: "http://placekitten.com/300/200/",
                            phone: "123 456 789", email: "slain@dog.com"}}
            />
            <Card contact={{name: "Mr Dogfucker", imgUrl: "http://placekitten.com/320/200/",
                phone: "123 456 789", email: "slain@dog.com"}}
            />
            <Card contact={{name: "Mr Smearshit", imgUrl: "http://placekitten.com/380/240/",
                phone: "123 456 789", email: "slain@dog.com"}}
            />
            <Card contact={{name: "Mr WeakCoward", imgUrl: "http://placekitten.com/360/200/",
                phone: "123 456 789", email: "slain@dog.com"}}
            />
        </main>
    )
}

export default Body