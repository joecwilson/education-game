//@ts-check

import React, {useState} from 'react'
import QuestionView from './QuestionView'
import Question from './Question.js'

class QuestionList extends React.Component {
    initialValues = [
        new Question(
            10,
            "What is 2+2",
            4
        ),
        new Question(
            11,
            "What is 2*2",
            4
        ),
        new Question(
            12,
            "what is 2^2",
            4
        )
    ];

    render(){
        return(
            <div>
                <h1>
                    List of Questions
                </h1>
                <div className="grid grid-cols-5 gap-5">
                    {this.initialValues.map((question) =>         
                        <div className="col-span-3 col-start-2 rounded-md bg-slate-400 p-4"  key={question._id}>
                            <QuestionView  question={question}/>

                        </div> 
                    )}  
                </div>
            </div>       
        );
    }
    
}

export default QuestionList;