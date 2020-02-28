import React from "react"

import Header from "./Header"
import Body from "./Body"
import TodoItem from "./TodoItem"
import Footer from "./Footer"

function App() {
    return (
        <div className={"AppMainDiv"}>
            <Header />
            <Body />
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <Footer/>
        </div>
    )
}

export default App