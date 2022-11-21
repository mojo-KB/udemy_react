import React from 'react'
import Header from './Header'
import data from '../../src/data.json'
import { useState } from 'react'
//components
import TodoList from './TodoList'

type Props = {}

function index({ }: Props) {
    const [todoList, setTodoList] = useState(data)

    return (
        <div>
            <Header />
            <TodoList todoList={todoList} />
        </div>
    )
}

export default index