import React from 'react';

export default function QuestionView(){
    return(
        <div className="Question">
            <div className="field">
                <span>This is the text of the question</span>
            </div>
            <form className="from-orange-100">
                <label for="ans"> Answer</label>
                <input type="text" id="ans" name="ans" value="0"></input>
            </form>
        </div>
    )
}