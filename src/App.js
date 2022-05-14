import React from 'react'
import Game from "./Game.js"
import Initial from "./Initial.js"
import "./reset.css"
import "./style.css"


export default function App() {
    const [start , setStart] = React.useState(false)
    const [deckID , setDeck] = React.useState()
    const [meta , setMeta] = React.useState()
    if(start === false){
        return (
            <Initial setStart={() => setStart(true)} setDeck={setDeck} setMeta={setMeta} meta={meta} deckID={deckID}/>
        );
    }else{
        return (
            <Game deckID ={deckID} meta = {meta} setStart ={setStart} setDeck={setDeck} setMeta={setMeta}/>
        );
    }
    
  }
  