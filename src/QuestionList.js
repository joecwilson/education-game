//@ts-check

import React, {useState} from 'react'
import QuestionView from './QuestionView'

export default function QuestionList (){
    const initialValues = [
        {
            _id: "something",
            question_text: "What is 2+2?",
            answer: 4
        },
        {
            _id: "something_else",
            question_text: "What is 2*2?",
            answer: 4
        },
        {
            _id: "final_question",
            question_text: "What is 2^2?",
            answer: 4
        }
    ];
    const [questions] = useState(initialValues);
    const questionViews = questions.map(
        question => <QuestionView key={question._id} question={question}/>
    );
    return(
        <div>
            <h1>
                List of Questions
            </h1>
            <div className="grid grid-cols-5 gap-10">
                <div className="col-span-3 col-start-2 rounded-md bg-slate-400 p-4" >
                    {questionViews}               
                </div> 
                <div className="box col-span-3 col-start-2 p-4">
                    padding
                </div>
            </div>
        </div>       
    );
}