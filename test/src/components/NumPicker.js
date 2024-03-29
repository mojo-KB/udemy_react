const getMood = () => {
    const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paraniod"];
    return moods[Math.floor(Math.random() * moods.length)]
  }

  

function NumPicker() {
    const getNum = () => {
        return Math.floor(Math.random() * 10) + 1; 
    }
    const ranNum = getNum()
    return (
        <>
            <h1>My Current Mood is: {getMood()} </h1>

            <h1>Your number is: {ranNum}</h1>           
            {ranNum === 7 && <h1>Congrats</h1>} 
            <h2>{ranNum === 5 ? 'Halfty' : "Not Mid" }</h2>
        </>
    )
}

export default NumPicker;

