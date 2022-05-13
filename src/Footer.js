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

function FooterFinal({answersList, length}){
    let finalMsg = "";
    let finalEmoji = "";
    let finalTitle = "";
    const rigthCheck = answersList.filter(answers => answers==="images/green.png" || answers==="images/orange.png");
    if((rigthCheck.length) === length){
        finalMsg = "Você não esqueceu de nenhum flashcard!"
        finalEmoji = "images/party.png";
        finalTitle = "Parabéns!"
    } else {
        finalMsg = "Ainda faltam alguns... Mas não desanime!";
        finalEmoji = "images/sad.png";
        finalTitle = "Putz..."
    }
    return (
        <div>
            <div className="title">
                <img src={finalEmoji} alt={finalEmoji} />
                <p>{finalTitle}</p>
            </div>
            <p className= "title">{finalMsg}</p>
            <p >{length}/{length} CONCLUÍDOS</p>
            <div className="answersList">
                {answersList.map( (answers, index) => {return <img key={index} src={answers} alt={answers} />})}
            </div>
        </div>
    )
}

export default function Footer({answersList,length}) {
    if (answersList.length === 8){
        return (
            <div className="footer final">
                <FooterFinal answersList={answersList} length={length}/>
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