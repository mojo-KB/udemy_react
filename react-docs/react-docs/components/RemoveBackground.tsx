import React from 'react'

type Props = {}

function RemoveBackground({ }: Props) {
    return (
        <div className="bg-purple-600 w-screen h-screen flex ">
            <div className='bg-black'>Hello</div>
            <img
                className="w-full h-full border-black"
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
            />
        </div>
    )
}

export default RemoveBackground