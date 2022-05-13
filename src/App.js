import React from 'react'
import Game from "./Game.js"
import Initial from "./Initial.js"


export default function App() {
    const [start , setStart] = React.useState(false)
    const [deckID , setDeck] = React.useState(0)
    if(start === false){
        return (
            <Initial setStart={() => setStart(true)} setDeck={setDeck}/>
        );
    }else{
        return (
            <Game deckID ={deckID}/>
        );
    }
    
  }
  