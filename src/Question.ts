/**
 * Holds values of Questions. id is a number that should increase along with questions
 * Question text is self-explanatory, along with answer
 * Correct is a number where -1 means not visible, 0 means visible but unanswered,
 * 1 means answered incorrectly, and 2 means answered correctly
 */
export default class Question{
    _id: number;
    question_text: String;
    answer: number;
    correct: number
    constructor(_id: number, question_text:String, answer:number, correct: number){
        this._id = _id
        this.question_text = question_text
        this.answer = answer
        this.correct = correct
    }
}