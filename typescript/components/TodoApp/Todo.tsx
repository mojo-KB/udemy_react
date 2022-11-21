import React from 'react'

type Props = {
    todo: any
}

function Todo({ todo }: Props) {
    return (
        <div>{todo.task}</div>
    )
}

export default Todo