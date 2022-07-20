import { getAllByTestId } from '@testing-library/react';
import React from 'react';
import {useState} from 'react';


const QuestionView = ({question}) => {
    const {text,answer} = question;
    const [userAnswer,setUserAnswer] = useState({})
    const test = "hello"
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('You answered ${userAnswer} to the question ${text}');
        //alert('You answered ${test}')

    }

    return(
        <div className="container mx-auto bg-slate-400 rounded-md mt-4 ">
            <div className="mb-4 text-center">
                <div className="block text-gray-700 text-sm font-bold mb-2" >
                    Question
                </div>
                <div className="">
                    <p>
                        {text}
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
            
            
        </div>
    );
};
export default QuestionView

