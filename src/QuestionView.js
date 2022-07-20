import React from 'react';

export default function QuestionView(){
    return(
        <div className="container mx-auto bg-slate-400 rounded-md m-8 ">
            <div className="m-4 text-center">
                <span>This is the text of the question</span>
            </div>
            <form className="from-orange-500">
                <label for="ans"> Answer</label>
                <input type="number" id="ans" name="ans" value="0"></input>
            </form>
        </div>
    )
}