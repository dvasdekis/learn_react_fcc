import React from "react";

function Body() {
    const firstName = "Dimitri"
    const lastName = "Vasdekis"
    const date = new Date()
    return (
        <main>
            <p>Hello {firstName + " " + lastName} !!</p>
            <h4>Hello {`${firstName} ${lastName}`}!!!</h4> {/* Different syntax */}
            <p>Current time is {date.getHours() % 12} o'clock!</p>
        </main>
    )
}

export default Body