import React from 'react'
export default function Cards({questions,
    answers, id}){
    
        const [flip, setFlip] = React.useState(false)
        const [final, setFinal] = React.useState(false)
        const [cover, setCover] = React.useState(false)

    if(cover=== false){
        return(
            <div className="cover-question">
                <p>Pergunta {id}</p>
                <img src="images/Vector.png" alt="setinha" onClick={()=> setCover(true)} />
            </div>
        )
    }else{
        if(flip===false){
            return( 
                <div className="questions">
                    <div className="question front-face">
                    <h1>{questions}</h1>
                    <img className="flip" src="images/setinha.png" alt="Flip" onClick={()=> setFlip(true)} />
                    </div>
                    <div className="question back-face">
                    <h1>{answers}</h1>
                    </div>
                </div>
            )
        }else{
            if(final===false){
                return( 
                    <div className="questions">
                        <div className="question front-face virado">
                        <h1>{questions}</h1>
                        </div>
                        <div className="question back-face virado">
                        <h1>{answers}</h1>
                        <div className="actions">
                            <button id="red" onClick={()=> setFinal(true)}className="action error" >Não lembrei</button>
                            <button id="yellow" onClick={()=> setFinal(true)}className="action almost">Quase não lembrei</button>
                            <button id="green" onClick={()=> setFinal(true)}className="action zap">Zap!</button>
                        </div>
                        </div>
                    </div>
                )
            }else{
                return(
                <div className="cover-question final">
                    <p>{questions} </p>
                    <div className="finalStatusImg">
                        <img src="" alt="final status" />
                    </div>
                </div>
                )
            }
        }
    }
}
  