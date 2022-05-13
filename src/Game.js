
import React from 'react';
import Header from "./Header.js"
import Content from './Content.js';
import Footer from './Footer.js';
export default function Game({deckID}){
   
    const [answersList, setAnswersList] = React.useState([]);
    const decks = [  [{question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
                        {question:"O React é __ ", answer:"uma biblioteca JavaScript para construção de interfaces"},
                        {question:"Componentes devem iniciar com __ ", answer:"letra maiúscula"},
                        {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
                        {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"},
                        {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências"},
                        {question:"Usamos props para __", answer:"passar diferentes informações para componentes"},
                        {question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}],
                    [{question:"Melhor campeão do LoL é", answer:"Thresh"}

                    ],
                    [{question:"O gigantudo da Colina", answer:"VASCO"}

                    ]
    ]

    function shuffle() {
        return Math.random() - 0.5;
    }

    const questions = decks[deckID].sort(shuffle)


    return( 
     
    <>
        
        <Header />
        <Content answersList={answersList} setAnswersList={setAnswersList} questions={questions}/>
        <Footer answersList={answersList} length={questions.length}/>
    </>

   )
}
  