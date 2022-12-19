import React from 'react'
import Todo from './Todo'

type Props = {
    todoList: any,
    handleToggle: any,
    handleFilter: any
}

function TodoList({ todoList, handleToggle, handleFilter }: Props) {
    return (
        <div>
            {todoList.map((todo: any) => {
                return (
                    <Todo todo={todo} handleToggle={handleToggle} />
                )
            })}
            <button onClick={handleFilter} className="bg-violet-400 text-white p-1 rounded-lg">Clear Complete</button>
        </div>
    )
}

export default TodoList