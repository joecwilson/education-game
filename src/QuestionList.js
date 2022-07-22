//@ts-check

import React, {useState} from 'react'
import QuestionView from './QuestionView'
import Question from './Question.js'

// class Question{
//     _id: number
//     question_text: String;
//     answer: number;
//     constructor(_id: number, question_text:String, answer:number){
//         this._id = _id
//         this.question_text = question_text
//         this.answer = answer
//     }
// }

class QuestionList extends React.Component {
    // constructor(props){
    //     super(props)
    // }
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
    //questions = useState(this.initialValues);

    // const questionViews = questions.map(
    //     question => <QuestionView key={question._id} question={question}/>
    // );
    render(){
        return(
            <div>
                <h1>
                    List of Questions
                </h1>
                <div className="grid grid-cols-5 gap-5">
                    {this.initialValues.map((question) =>         
                        <div className="col-span-3 col-start-2 rounded-md bg-slate-400 p-4" >
                            <QuestionView key={question._id} question={question}/>

                        </div> 
                    )}  
                </div>
            </div>       
        );
    }
    
}

export default QuestionList;