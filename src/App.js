import React from 'react'
import Game from "./Game.js"
function Initial({setStart}){
return(
        
            <div className="content">
                <img src="images/image 1.png" alt="Logo" />
                <h1>Zap Recall</h1>
                <button onClick={setStart}>Iniciar Recall</button>
            </div>
       
)
}



export default function App() {
    const [start , setStart] = React.useState(false)
    if(start === false){
        return (
            <Initial setStart={() => setStart(true)}/>
        );
    }else{
        return (
            <Game />
        );
    }
    
  }
  