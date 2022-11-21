import React from 'react'

type Props = {}

function Todo({ }: Props) {
    const handleSumbit = (e) => {
        e.target.value
        i
    }
    return (
        <div>
            <form action="">
                <input type="text" placeholder='Enter Todo' />
                <button type='submit' onClick={handleSumbit}>Sumbit</button>
            </form>
        </div>
    )
}

export default Todo