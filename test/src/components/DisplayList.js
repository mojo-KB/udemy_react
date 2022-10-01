

function DisplayList(props) {
    const {name, hobbies}= props;
    return(
        <>
        <h1>This is my friend {name} </h1> 
        <ul>
            {hobbies.map( (hobbie) => <li>{hobbie}</li>)}
        </ul>
        </>
    )
}
export default DisplayList;