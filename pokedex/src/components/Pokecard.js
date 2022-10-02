import styled from 'styled-components'

const PokecardWrapper = styled.div`
    //border: 2px solid mediumseagreen;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 1rem;
    box-shadow: 7px 10px 12px -5px rgba(0,0,0,0.56);
    text-align: center;
    background-color: white;
    border-radius: 5%;
`
const ImgWrapper = styled.div`
   display : flex ;
   justify-content: center;
   align-items: center;
   height: 250px;
   background-color: #eceff1;
   border-radius: 3px;
   margin-bottom: 1rem;

   
   transition: all .2s ease-in-out;
   &:hover {
        transform: scale(1.1);
    
    
   }
`
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'


let padToThree  = (number) => (number <= 999 ? `00${number}`.slice(-3): number)
function Pokecard(props) {
    let imgSrc = `${POKE_API2}${padToThree(props.id)}.png`
    return (
        <PokecardWrapper>
            <h1>{props.name}</h1>
            <ImgWrapper>
                <img alt={props.name} src={imgSrc}/>
            </ImgWrapper>
            <div>Type: {props.type}</div>
            <div>EXP: {props.exp}</div>
        </PokecardWrapper>
    )
}
export default Pokecard;