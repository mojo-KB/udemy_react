import React from 'react'
import Header from './Header'
import data from '../../src/data.json'
import { useState } from 'react'
//components
import TodoList from './TodoList'
import ToDoForm from './TodoForm'

type Props = {}



function index({ }: Props) {
    const [todoList, setTodoList] = useState(data)

    const handleToggle = (id: number) => {
        let mapped = todoList.map(task => {
            return task.id == id ? { ...task, complete: !task.complete } : { ...task }
        })
        setTodoList(mapped)
    }
    const handleFilter = () => {
        let filtered = todoList.filter(task => {
            return !task.complete
        })
        setTodoList(filtered)
    }
    const addTask = (useInput: string) => {
        let copy = [...todoList];
        copy = [...copy, { id: todoList.length + 1, task: useInput, complete: false }];
        setTodoList(copy);
    }
    return (
        <div>
            <Header />
            <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter} />
            <ToDoForm addTask={addTask} />
        </div>
    )
}

export default index