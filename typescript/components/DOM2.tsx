import React, { useEffect } from 'react'

type Props = {}

function DOM2({ }: Props) {
    const handleClick = () => {
        alert("Clicked")
    }


    useEffect(() => {
        alert("The button is clicked")
    }, [handleClick])

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default DOM2