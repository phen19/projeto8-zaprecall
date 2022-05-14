import App from "./App";
function FooterInitial({count, answersList, length}){
    return (
        <div className="InProgress">
            <p>{count}/{length} CONCLUÍDOS</p>
            <div>
                {answersList.map( (answers, index) => {return <img key={index} src={answers} alt={answers} />})}
            </div>
        </div>
    )
}

function FooterFinal({answersList, length, setAnswersList, meta, setStart, setDeck, setMeta}){
    let finalMsg = "";
    let finalEmoji = "";
    let finalTitle = "";
    const rigthCheck = answersList.filter(answers => answers==="images/green.png" || answers==="images/orange.png");
    if((rigthCheck.length) >= meta){
        finalMsg = "Você não esqueceu de nenhum flashcard!"
        finalEmoji = "images/party.png";
        finalTitle = "Parabéns!"
    } else {
        finalMsg = "Ainda faltam alguns... Mas não desanime!";
        finalEmoji = "images/sad.png";
        finalTitle = "Putz..."
    }
    return (
        <>
            <div className="title">
                <img src={finalEmoji} alt={finalEmoji} />
                <p>{finalTitle}</p>
            </div>
            <p className= "title">{finalMsg}</p>
            <p >{length}/{length} CONCLUÍDOS</p>
            <div className="answersList">
                {answersList.map( (answers, index) => {return <img key={index} src={answers} alt={answers} />})}
            </div>
            <Restart answersList={answersList} setAnswersList={setAnswersList} setStart={setStart} setDeck={setDeck} setMeta={setMeta}/>
        </>
    )
}

function Restart({answersList, setAnswersList, setStart, setDeck,setMeta}){
    
    if(answersList.length > 0){
        return(
            <div className="restart" onClick={()=>{setAnswersList([]);setStart(false);setDeck(0);setMeta()}}>
                REINICIAR RECALL
            </div>
        )
    }else{
        return(
            <App />
        )
    }
    
}


export default function Footer({answersList,setAnswersList,length, meta, setStart, setDeck, setMeta}) {
    if (answersList.length === length){
        return (
            <div className="footer final">
                <FooterFinal answersList={answersList} length={length} meta={meta} setAnswersList={setAnswersList} setStart={setStart} setDeck={setDeck} setMeta={setMeta}/>
            </div>
            )
    } else {
        return (
            <div className="footer">
                <FooterInitial answersList={answersList} count={answersList.length} length={length}/>
            </div>
        )
    }
}