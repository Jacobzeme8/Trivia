import { appState } from "../AppState.js";
import { questionService } from "../Services/QuestionsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";



export class QuestionController{

  constructor(){
    // appState.on('questions', this.drawQuestion())
    this.getQuestions()
  }

  async getQuestions(){
    try {
      await questionService.getQuestions()
      this.drawQuestion()
    } catch (error) {
      Pop.error(error)
    }
  }



  drawQuestion(){
    try {
      questionService.drawQuestion()
    } catch (error) {
      Pop.error(error)
    }
  }

  checkAnswer(){
    window.event.preventDefault()
    try {
      const form = window.event.target
      const formData = getFormData(form)
      questionService.checkAnswer(formData)
    } catch (error) {
      Pop.error(error)
    }
  }

}