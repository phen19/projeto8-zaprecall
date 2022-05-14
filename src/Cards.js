import React from 'react'
import red from "./images/red.png";
import orange from "./images/orange.png"
import green from "./images/green.png"
import arrow from  "./images/Vector.png"
import turn from "./images/setinha.png"

export default function Cards({questions,
    answers, id, answersList, setAnswersList}){
    
        const [flip, setFlip] = React.useState(false)
        const [final, setFinal] = React.useState(false)
        const [cover, setCover] = React.useState(false)
        
        const [color, setColor] = React.useState("");
        let imageURL =""

        const addRed = () => {
            setAnswersList([...answersList, red]);
            setColor("red");
            setFinal(true);
        }

        const addOrange = () => {
            setAnswersList([...answersList, orange]);
            setColor("#FF922E");
            setFinal(true);
        }
        const addGreen = () => {
            setAnswersList([...answersList, green]);
            setColor("green");
            setFinal(true);
        }


    if(cover=== false){
        return(
            <div className="cover-question">
                <p>Pergunta {id}</p>
                <img src={arrow} alt="arrow" onClick={()=> setCover(true)} />
            </div>
        )
    }else{
        if(flip===false){
            return( 
                <div className="questions">
                    <div className="question front-face">
                    <h1>{questions}</h1>
                    <img className="flip" src={turn} alt="Flip" onClick={()=> setFlip(true)} />
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
                            <button id="red" onClick={addRed}className="action error" >Não lembrei</button>
                            <button id="orange" onClick={addOrange}className="action almost">Quase não lembrei</button>
                            <button id="green" onClick={addGreen}className="action zap">Zap!</button>
                        </div>
                        </div>
                    </div>
                )
            }else{
                if(color==="red"){
                    imageURL = red
                }
                if(color==="#FF922E"){
                    imageURL = orange
                }
                if(color==="green"){
                    imageURL = green
                }
                return(
                <div className="cover-question final">
                    <p style={{color: color}}>Pergunta {id} </p>
                        <img src={imageURL} alt="final status" />
                    
                </div>
                )
            }
        }
    }
}
  