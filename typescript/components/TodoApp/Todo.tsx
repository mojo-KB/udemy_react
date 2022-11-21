import React from 'react'

type Props = {
    todo: any
}

function Todo({ todo }: Props) {
    return (
        <div className={todo.complete ? "line-through" : ""}>{todo.task}</div>
    )
}

export default Todo