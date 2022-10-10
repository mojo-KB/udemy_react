import { useState } from "react";


function Game() {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

   

    return (
        <div>
            <h1>Your score is: {score} </h1>
            <button onClick={() => setScore(score + 1)}>+ score</button>
            <button onClick={() => setScore(score - 1)}>- Score</button>
        </div>        
    )
}

export default Game;