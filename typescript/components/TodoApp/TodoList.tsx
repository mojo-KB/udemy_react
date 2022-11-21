import React from 'react'
import Todo from './Todo'

type Props = {
    todoList: any
}

function TodoList({ todoList }: Props) {
    return (
        <div>
            {todoList.map((todo: any) => {
                return (
                    <Todo todo={todo} />
                )
            })}
        </div>
    )
}

export default TodoList