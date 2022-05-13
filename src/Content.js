
import React from 'react';
import Cards from "./Cards.js"
export default function Content({answersList, setAnswersList, questions}) {

    

   
    return (
        
        <div className='content'>
           {questions.map((questions,index) =><Cards answersList={answersList} setAnswersList={setAnswersList}key={index} id={index+1} questions = {questions.question} answers = {questions.answer}/>)}
        </div>
    )
}