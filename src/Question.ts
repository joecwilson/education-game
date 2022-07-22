export default class Question{
    _id: number
    question_text: String;
    answer: number;
    constructor(_id: number, question_text:String, answer:number){
        this._id = _id
        this.question_text = question_text
        this.answer = answer
    }
}