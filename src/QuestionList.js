//@ts-check

import React, {useState} from 'react'
//import React from 'react'
import QuestionView from './QuestionView'
import Question from './Question.js'

class QuestionList extends React.Component {
    constructor(){
        //@ts-ignore
        super();
        this.state = {
            questions: [
                new Question(
                    10,
                    "What is 2+2",
                    4,
                    0
                ),
                new Question(
                    11,
                    "What is 2*2",
                    4,
                    -1
                ),
                new Question(
                    12,
                    "what is 2^2",
                    4,
                    -1
                )
            ],
        }

        this.handleCorrectChange = this.handleCorrectChange.bind(this)
        this.getOnlyVisible = this.getOnlyVisible.bind(this)
    }
    


    /**
     * @param {number} correct
     * @param {number} _id
     */
    handleCorrectChange(correct, _id){

        let questiontoChange = this.state.questions.find(Question => Question._id === _id);
        // @ts-ignore
        questiontoChange.correct = correct;
        let changeIndex = this.state.questions.findIndex(Question => Question._id === _id);
        let newQuestions = this.state.questions
        // @ts-ignore
        newQuestions[changeIndex] = questiontoChange
        
        // If the user got it correct reveal the next question
        // Need to determine when user has finished final question and do someyhing else.
        if(correct === 2){
            let questionToReveal = this.state.questions.find(Question => Question._id === (_id+1));
            // @ts-ignore
            questionToReveal.correct = 0;
            let revealIndex = this.state.questions.findIndex(Question => Question._id === (_id+1));
            // @ts-ignore
            newQuestions[revealIndex] = questionToReveal;
        }

        // Update state
        this.setState((state,props) =>({
            questions:newQuestions
        }));
    }
    
    getOnlyVisible(){
        return this.state.questions.filter(question => question.correct >= 0)
    }

    render(){
        return(
            <div>
                <h1>
                    List of Questions
                </h1>
                <div className="grid grid-cols-5 gap-5">
                    {this.getOnlyVisible().map((question) =>         
                        <div className="col-span-3 col-start-2 rounded-md bg-slate-400 p-4"  key={question._id}>
                            <QuestionView  
                                question={question}
                                onCorrectChange={this.handleCorrectChange} />

                        </div> 
                    )}  
                </div>
            </div>       
        );
    }
    
}

export default QuestionList;