import React, { useState } from 'react'

type Props = {}

function state({}: Props) {
    const [count, setCount] = useState(0)
    const onClick = () => {
        setCount(count + 1)
    }
  return (
    <div className='flex space-x-5'>
        <button onClick={onClick} className="bg-blue-600 text-white w-10 text-cnter rounded-lg">+</button>
        <h1>Hello World+ {count}</h1>
    </div>
  )
}

export default state