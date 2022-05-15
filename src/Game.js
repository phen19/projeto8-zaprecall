
import React from 'react';
import Header from "./Header.js"
import Content from './Content.js';
import Footer from './Footer.js';


export default function Game({deckID, meta, setStart, setDeck, setMeta}){
   
    const [answersList, setAnswersList] = React.useState([]);
    const decks = [ [{question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
                        {question:"O React é __ ", answer:"uma biblioteca JavaScript para construção de interfaces"},
                        {question:"Componentes devem iniciar com __ ", answer:"letra maiúscula"},
                        {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
                        {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"},
                        {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências"},
                        {question:"Usamos props para __", answer:"passar diferentes informações para componentes"},
                        {question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}],
                    [{question:"Melhor campeão do LoL é", answer:"Thresh"},
                        {question:"Irmã da Kayle", answer:"Morgana"},
                        {question:"Noxianas irmãs", answer:"Cassiopeia e Katarina"},
                        {question:"Maior campeão brasileiro", answer:"brTT"},
                        {question:"Faker Brasileiro", answer:"Kami"},
                        {question:"Exódia", answer:"Yang, Revolta, Tockers, Micao e Jockster"},
                        {question:"Armado e ___", answer:"Preparado"},
                        {question:"Tem um gosto meio __", answer:"Roxo"},
                    ],
                    [{question:"O gigantudo da Colina", answer:"VASCO"},
                        {question:"Centenario", answer:"1998"},
                        {question:"Ah __", answer:"É Edmundo"},
                        {question:"Contra o __ sensacional", answer:"River Plate"},
                        {question:"Eu sou ___ sim senhor", answer:"boêmio"},
                        {question:"O sentimento __", answer:"não pode parar"},
                        {question:"Gol de quem?", answer:"Gol do Juninho"},
                        {question:"Enquanto houver um __", answer:"Coração infantil"},
                    ]
    ]

    function shuffle() {
        return Math.random() - 0.5;
    }

    // Não utilizo o setter "setQuestions" pois não vou mudar o estado de questions
    const [questions] = React.useState(decks[deckID].sort(shuffle))

/*Estava utilizando o código abaixo, mas estava com um bug. 
Se houvessem dois cards abertos e marcasse alguma das opções (Zap, não lembro, quase lembrei)
em um deles, o conteudo do outro era alterado, como se fosse feito o shuffle novamente na array. */
    /*const questions = decks[deckID].sort(shuffle)*/

    return( 
     
    <>
        
        <Header />
        <Content answersList={answersList} setAnswersList={setAnswersList} questions={questions}/>
        <Footer answersList={answersList} length={questions.length} meta ={meta} setAnswersList={setAnswersList} setStart={setStart} setDeck={setDeck} setMeta={setMeta}/>
    </>

   )
}
  