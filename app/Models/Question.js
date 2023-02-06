
export class Question{


  constructor(data){
    this.category = data.catagory
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
  }
  
}