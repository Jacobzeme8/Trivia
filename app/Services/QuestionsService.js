import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"
import { trivia_api } from "./AxiosService.js"

class QuestionService{
  drawQuestion() {
    const Questions = appState.Questions
    let template = " "
    let x = Math.floor(Math.random()*appState.Questions.length)
    appState.jakeQuestion = Questions[x]
    template = appState.jakeQuestion.QuestionTemplate
    setHTML('question', template)
  }

  checkAnswer(formData){
    let answer = formData.answer.toString()
    console.log(answer);
    console.log(appState.jakeQuestion.correctAnswer); 
    if(answer.toUpperCase() == appState.jakeQuestion.correctAnswer.toUpperCase()){
      Pop.success("Correct!")
      let index = appState.Questions.findIndex(q => q.correctAnswer == appState.jakeQuestion.correctAnswer)
      appState.Questions.splice(index,1)
      if(appState.Questions.length == 0){Pop.success("Congrats! you got all the questions corrext")
        return}
      this.drawQuestion()
      
    
    }
    else{
      Pop.error("wrong answer!")
      return}
      
    
      
    }
  

  async getQuestions() {
    const res = await trivia_api.get('?amount=2')
    // console.log(res.data.results);
    const questionData = res.data.results
    appState.Questions = questionData.map(q => new Question(q))
    console.log(appState.Questions);

}
}

export const questionService = new QuestionService()