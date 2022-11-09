
import React from 'react'

type Props = {}

function delayInitialization({}: Props) {
    const movies= ["Arrival", 'The Thing', "Aliens", "Amadeus"];
    let foundMovie: string;

    for (let movie of movies) {
        if (movie === "Amadeus") 
            foundMovie = "Amadeus"
    } 

  return (
   <div>
    
   </div> 
  )
}

export default delayInitialization


