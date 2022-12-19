import React, { useState } from 'react';

type Props = {
    addTask: any
}

const ToDoForm = ({ addTask }: Props) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e: any) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;