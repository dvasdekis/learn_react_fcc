import React from "react";

function Body() {
    const firstName = "Dimitri"
    const lastName = "Vasdekis"
    const date = new Date()

    const pStyle = {
        color: "#AF8C00", backgroundColor: "#AF2D00"
    }
    return (
        <main>
            {/* Preferred syntax */}
            <p style={pStyle}>Hello {firstName + " " + lastName} !!</p>
            {/* Alternative syntax */}
            <h4 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Hello {`${firstName} ${lastName}`}!!!</h4>
            <p>Current time is {date.getHours() % 12} o'clock!</p>
        </main>
    )
}

export default Body