import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"
import { trivia_api } from "./AxiosService.js"

class QuestionService{
  async drawQuestion() {
    const Questions = appState.Questions
    let template = " "
    console.log(Questions.length)
    Questions.forEach(q => template += q.QuestionTemplate)
    setHTML('question', template)
  }

  checkAnswer(formData){
  }

  async getQuestions() {
    const res = await trivia_api.get('?amount=10')
    // console.log(res.data.results);
    const questionData = res.data.results
    appState.Questions = questionData.map(q => new Question(q))
    console.log(appState.Questions);

}
}

export const questionService = new QuestionService()