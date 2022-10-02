import styled from "styled-components";
import Pokedex from "./Pokedex";

const pokemon = [
    { id: 4, name: "Charmander", type: "Fire", base_experience: 62},
    { id: 7, name: "Squirtle", type: "Water", base_experience: 63},
    { id: 11, name: "Metapod", type: "Bug", base_experience: 72},
    { id: 12, name: "Butterfree", type: "Flying", base_experience: 178},
    { id: 25, name: "Pikachu", type: "Eletric", base_experience: 112},
    { id: 39, name: "Jugglypuff", type: "Normal", base_experience: 95},
    { id: 94, name: "Gengar", type: "Poison", base_experience: 225},
    { id: 133, name: "Eevee", type: "Normal", base_experience: 65},
]

function Pokegame() {
    let hand1 = [];
    let hand2 = [ ...pokemon]


    while (hand1.length < hand2.length) {
        let randIndex = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randIndex, 1)[0];
        hand1.push(randPokemon)
    }
    
    let exp1 = hand1.reduce( (exp, p) => exp + p.base_experience, 0)
    let exp2 = hand2.reduce( (exp, p) => exp + p.base_experience, 0)
    
    let winner1 = (exp1 > exp2) ? true : false;
    console.log(winner1);
    let winner2 = (exp2 > exp1) ? true : false;
    console.log(winner2)
    return (
        <div>
            <Pokedex pokemon={hand1} exp={exp1} isWinner={winner1}/>
            <Pokedex pokemon={hand2} exp={exp2} isWinner={winner2}/>
        </div>
    )
}
export default Pokegame;
