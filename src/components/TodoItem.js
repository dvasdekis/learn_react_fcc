import React from "react";

function TodoItem(){
    return (
        <div className={"todo-item"}>
            <input type={"checkbox"} />
            <p>Some checkbox text</p>
        </div>
    )
}

export default TodoItem