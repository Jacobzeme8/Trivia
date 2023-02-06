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



  async drawQuestion(){
    try {
      questionService.drawQuestion()
    } catch (error) {
      Pop.error(error)
    }
  }

  checkAnswer(){
    window.event.preventDefault()
    try {
      
    } catch (error) {
      Pop.error(error)
    }
  }

}