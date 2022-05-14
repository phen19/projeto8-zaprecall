import React from 'react'
import Game from "./Game.js"
import Initial from "./Initial.js"


export default function App() {
    const [start , setStart] = React.useState(false)
    const [deckID , setDeck] = React.useState(0)
    const [meta , setMeta] = React.useState()
    if(start === false){
        return (
            <Initial setStart={() => setStart(true)} setDeck={setDeck} setMeta={setMeta} meta={meta}/>
        );
    }else{
        return (
            <Game deckID ={deckID} meta = {meta}/>
        );
    }
    
  }
  