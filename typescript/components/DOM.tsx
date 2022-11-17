import React from 'react'
import { useEffect } from 'react'
type Props = {}

function DOM({ }: Props) {
    if (typeof window === 'object') {
        document.addEventListener("DOMContentLoaded", () => {
            alert(
                "Finished DOM version"
            )
        })
        const btn = document.querySelector("button");
    }


    useEffect(() => {
        alert("Finished useEffect")
    }, [])



    return (
        <div>
            <button id='btn'>Hello</button>
        </div>
    )
}

export default DOM