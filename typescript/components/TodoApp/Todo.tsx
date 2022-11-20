import React from 'react'

type Props = {
    todo: object,
    handleToggle(): void
}

function Todo({ todo, handleToggle }: Props) {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(.e)
    }
    return (
        <div>Todo</div>
    )
}

export default Todo