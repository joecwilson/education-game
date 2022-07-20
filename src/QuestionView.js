import React from 'react';

const QuestionView = ({question}) => {
    const {text,answer} = question;
    return(
        <div className="container mx-auto bg-slate-400 rounded-md m-8 ">
            <div className="mb-4 text-center">
                <div className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Question
                </div>
                <div className="">
                    <p>
                        {text}
                    </p>
                </div>
            </div>
            <div className="mb-6 text-center">
                <label className="block text-gray-700 text-sm font-bold mb-2"  for="answer">
                    Answer
                </label>
                <input className="shadow appearance-none border border-blue-500 rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mx-8" id="answer" type="number" placeholder="0">
                </input>
            </div>
            <div className="flex items-center justify-between text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6" type="button">
                    Submit Answer
                </button>
            </div>
            
        </div>
    );
};
export default QuestionView

