import Game from "../components/game";
import { useState } from 'react'
function about() {

    const [score, setScore] = useState(99)
    const [gameOver, setGameOver] = useState(false)

    return (
        <>
        <h1>Hello</h1>
        {score}
        <button onClick={() => setScore(score + 1)}>+ score</button>
        {gameOver}
        <Game />
        </>
    )
}
export default about;