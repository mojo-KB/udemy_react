
function SlotMachine(props) {
    //const winner = (s1 === s2) && (s2 === s3)
    const winner = (props.s1 === props.s2) && (props.s2 === props.s3)
    return (
        <>
            <h1>This is a slotting machine: </h1>
            <h2>{props.s1} {props.s2} {props.s3}</h2>
            <p> {winner ? "You win" : "You lose" } </p>
            
        </>
    )
}

export default SlotMachine;
 