import React from 'react'
import Deck from './Deck'
import Meta from './Meta'


export default function Initial({setStart, setDeck, setMeta, meta}){
    const [goToDeck , setGoToDeck] = React.useState(false)
    
    if(goToDeck === false){
        return(
            <Meta meta ={meta} setMeta={setMeta} setStart={setStart} setGoToDeck={() => setGoToDeck(true)}/>
            
        )
    }else{
        return(
            <Deck setStart={setStart} setDeck={setDeck} />
        )
    }
    
    }