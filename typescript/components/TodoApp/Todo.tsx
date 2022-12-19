import React from 'react'

type Props = {
    todo: any
    handleToggle: any
}

function Todo({ todo, handleToggle }: Props) {

    const handleClick = (e: any) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div
            id={todo.id}
            key={todo.id + todo.task}
            onClick={handleClick}
            className={todo.complete ? "line-through cursor-pointer" : "cursor-pointer"}>{todo.task}</div>
    )
}

export default Todo