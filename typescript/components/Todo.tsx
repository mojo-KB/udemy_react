import React from 'react'

type Props = {}

function Todo({ }: Props) {
    const handleSumbit = (e) => {
        e.target.value
    }
    return (
        <div>
            <form action="">
                <input type="text" placeholder='Enter Todo' onChange={(e) => } />
                <button type='submit' onClick={handleSumbit}>Sumbit</button>
            </form>
        </div>
    )
}

export default Todo