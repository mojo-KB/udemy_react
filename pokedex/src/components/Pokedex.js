import styled from 'styled-components'
import Pokecard from './Pokecard'




const PokedexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 3%;
`


const PokedexCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items : center ;
    flex-wrap: wrap;
    

`
const Title = styled.h2`
    color: ${props => props.isWinner ? 'red' : 'green'}
`
// const pokemon = [
//     { id: 4, name: "Charmander", type: "Fire", base_experience: 62},
//     { id: 7, name: "Squirtle", type: "Water", base_experience: 63},
//     { id: 11, name: "Metapod", type: "Bug", base_experience: 72},
//     { id: 12, name: "Butterfree", type: "Flying", base_experience: 178},
//     { id: 25, name: "Pikachu", type: "Eletric", base_experience: 112},
//     { id: 39, name: "Jugglypuff", type: "Normal", base_experience: 95},
//     { id: 94, name: "Gengar", type: "Poison", base_experience: 225},
//     { id: 133, name: "Eevee", type: "Normal", base_experience: 65},
// ]
function Pokedex({pokemon, exp, isWinner}) {

    return(
        <PokedexWrapper>
            <h1>Pokedex</h1>
            <p>Total Experience: {exp}</p>
            <p>{isWinner}</p>
            <Title>{isWinner ? "Winner" : "Loser"}</Title>
            
            <PokedexCardWrapper>
            {pokemon.map( (i) => (
                <Pokecard id={i.id} name={i.name} type={i.type} exp={i.base_experience} />
            ))}
            </PokedexCardWrapper>
        </PokedexWrapper>
    )
}
export default Pokedex;