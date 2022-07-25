import React from 'react';
import {useState} from 'react';
import correctLogo from './images/Correct.svg'
import incorrectLogo from './images/Incorrect.svg'


function QuestionView (props){
    const [userAnswer,setUserAnswer] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(userAnswer === props.question.answer){
            props.onCorrectChange(2, props.question._id)
            //setCorrect(correct => true)
        }
        else{
            props.onCorrectChange(1, props.question._id)
            //setCorrect(correct => false)
        }

    }

    return(
        <div className="container mx-auto">
            <div className="mb-4 text-center">
                <div className="block text-gray-700 text-sm font-bold mb-2" >
                    Question
                </div>
                <div className="">
                    <p>
                        {props.question.question_text}
                    </p>
                </div>
            </div>
            <form className="mb-6 text-center" onSubmit={handleSubmit}>
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Answer
                </label>
                <input 
                    className="shadow appearance-none border border-blue-500 rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mx-8" 
                    id="answer" 
                    type="number" 
                    placeholder="0"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(parseInt(e.target.value))}/>
                <input className="" type="submit"/>
            </form>
            {(props.question.correct === 2)? 
                <img 
                    src={correctLogo} 
                    className= "max-h-10 m-5 ml-18"
                    alt="You got the answer correct"/>
                :
                (props.question.correct === 1)?
                    <img 
                    src={incorrectLogo} 
                    className= "max-h-10 m-5 ml-18"
                    alt="You got the answer incorrect"/>
                    :"Not Completed Yet"
            
                
            }
            
        </div>
    );
};
export default QuestionView

