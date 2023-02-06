
export class Question{


  constructor(data){
    this.category = data.catagory
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
  }


  get QuestionTemplate(){
    return`
    <p>${this.question}</p>
    <form onsubmit="app.questionsController.checkAnswer()">
      <label for="answer">Answer:</label>
      <input class="form-control" id="answer" type="text" name="answer"></input>
      <button class ="btn btn-success" type="submit">Submit Answer</button>
    </form>
    `
  }

}