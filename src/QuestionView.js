import { getAllByTestId } from '@testing-library/react';
import React from 'react';
import {useState} from 'react';

import correctLogo from './images/Correct.svg'


const QuestionView = ({question}) => {
    const {question_text,answer} = question;
    const [userAnswer,setUserAnswer] = useState(0);
    const [correct,setCorrect] = useState(0);
    //let correct = false;
    const handleSubmit = (event) => {
        event.preventDefault();
        if(userAnswer == answer){
            //alert("You answered " + userAnswer + " to the question " + "\n\n"+ question_text + "\n\nYou were correct. Good Job! :)");
            setCorrect(correct => true)
            //alert("You answered {userAnswer} to the question {text} \n\nYou were correct. Good Job! :)");
        }
        else{
            //alert("You answered " + userAnswer + " to the question " + "\n\n"+ question_text + "\n\nYou were incorrect. Try agqin :(");
        }
        
        //alert('You answered ' + test)

    }

    return(
        <div className="container mx-auto">
            <div className="mb-4 text-center">
                <div className="block text-gray-700 text-sm font-bold mb-2" >
                    Question
                </div>
                <div className="">
                    <p>
                        {question_text}
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
                    onChange={(e) => setUserAnswer(e.target.value)}/>
                <input className="" type="submit"/>
            </form>
            {(correct)? 
                <img src={correctLogo} className= "max-h-10 m-5 ml-18"></img>:
                "Not Completed Yet"
            }
            
        </div>
    );
};
export default QuestionView

