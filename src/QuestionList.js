import React, {useState} from 'react'
import QuestionView from './QuestionView'

export default function QuestionList (){
    const initialValues = [
        {
            _id: "something",
            question_text: "This is the first question. What is 2+2?",
            answer: 4,
            correct: false
        },
        {
            _id: "something_else",
            question_text: "This is the second question. What is 2*2?",
            answer: 4,
            correct: false
        },
        {
            _id: "final_question",
            question_text: "This is the third question. What is 2^2?",
            answer: 4,
            correct: false
        }
    ];
    const [questions] = useState(initialValues);
    const questionViews = questions.map(
        question => <QuestionView key={question._id} question={question}/>
    );
    return(
        <div className="container">
            <h1>
                List of Questions
            </h1>
            {questionViews}
        </div>
    );
    
    }