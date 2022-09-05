//@ts-check

import React, {useState} from 'react'
import QuestionView from './QuestionView'
import Question from './Question.js'

class QuestionList extends React.Component {
    constructor() {
        //@ts-ignore
        super();
        this.state = {
            title: "",
            description: "",
            questions: [],
        };

        this.handleCorrectChange = this.handleCorrectChange.bind(this);
        this.getOnlyVisible = this.getOnlyVisible.bind(this);
    }

    async componentDidMount() {
        try {
            const res = await fetch('http://localhost:8000/api/1/');
            const questionAPIResult = await res.json();

            this.setState({
                questions: questionAPIResult["question_rel"],
                title: questionAPIResult["title"],
                description: questionAPIResult["description"]
            });
        } catch (e) {
            console.log(e);
        }
    }


    /**
     * @param {number} correct
     * @param {number} id
     */
    handleCorrectChange(correct, id) {
        //alert("HandleCorrectChange called with correct value of " + correct + " and id value of " + id)
        let questiontoChange = this.state.questions.find(Question => Question.id === id);
        // @ts-ignore
        questiontoChange.visible = correct;
        let changeIndex = this.state.questions.findIndex(Question => Question.id === id);
        let newQuestions = this.state.questions;
        // @ts-ignore
        newQuestions[changeIndex] = questiontoChange;

        // If the user got it correct reveal the next question
        // Need to determine when user has finished final question and do someyhing else.
        if (correct === 2 && changeIndex < this.state.questions.length - 1) {
            let questionToReveal = this.state.questions.find(Question => Question.id === (id + 1));
            // @ts-ignore
            questionToReveal.visible = 0;
            let revealIndex = this.state.questions.findIndex(Question => Question.id === (id + 1));
            // @ts-ignore
            newQuestions[revealIndex] = questionToReveal;
        }

        // Update state
        this.setState((state, props) => ({
            questions: newQuestions
        }));
    }

    getOnlyVisible() {
        return this.state.questions.filter(question => question.visible >= 0)
    }

    render() {
        return (

            <div className="grid grid-cols-5 gap-5">
                <h1 className="col-span-3 col-start-2 dark:text-white text-5xl text-center py-5">
                    {this.state.title}
                </h1>
                <p>
                    {this.state.description}
                </p>

                {this.getOnlyVisible().map((question) =>
                    <div className="col-span-3 col-start-2 rounded-md bg-slate-400 p-4 dark:bg-stone-800"
                         key={question.id}>
                        <QuestionView
                            question={question}
                            onCorrectChange={this.handleCorrectChange}/>

                    </div>
                )}

            </div>
        );
    }

}

export default QuestionList;