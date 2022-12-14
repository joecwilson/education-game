import React from 'react';
import {useState} from 'react';
import correctLogo from './images/Correct.svg'
import incorrectLogo from './images/Incorrect.svg'

function QuestionView(props) {
    const [userAnswer, setUserAnswer] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();

        const correctAnswerNum = parseFloat(props.question.answer);
        // alert("You inputted:" + userAnswer + " the correct answer was " + correctAnswerNum +
        //     "the type of your answer was " + typeof (userAnswer) + "the type of the correct answer was " +
        //     typeof (correctAnswerNum));
        if ((userAnswer >= correctAnswerNum * 0.99) && (userAnswer <= correctAnswerNum * 1.01)) {
            props.onCorrectChange(2, props.question.id);
        } else {
            props.onCorrectChange(1, props.question.id);
        }
    }

    return (<div className="container mx-auto">
        <div className="mb-4 text-center">
            <div className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
                Question
            </div>
            <div className="dark:text-white">
                <p>
                    {props.question.text}
                </p>
            </div>
        </div>
        <form className="mb-6 text-center" onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
                Answer
            </label>
            <input
                className="shadow appearance-none border border-blue-500 rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mx-8"
                id="answer"
                type="number"
                placeholder="0"
                value={userAnswer}
                onChange={(e) => setUserAnswer(parseFloat(e.target.value))}/>
            <button type="submit"> Submit</button>
        </form>
        {(props.question.visible === 2) ? <img
            src={correctLogo}
            className="max-h-10 m-5 ml-18"
            alt="You got the answer correct"/> : (props.question.visible === 1) ? <img
            src={incorrectLogo}
            className="max-h-10 m-5 ml-18"
            alt="You got the answer incorrect"/> : <p className="text-white">Not Completed Yet</p>}
    </div>);
};
export default QuestionView

