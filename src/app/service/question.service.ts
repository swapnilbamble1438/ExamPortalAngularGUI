import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseURL from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

   // get Questions of quiz
   public getAllQuestionsOfQuiz(quizid:number):Observable<any>
   {
     return this.httpClient.get(`${baseURL}/question/all/quiz/${quizid}`);
   }

     // get specific numbers of Questions of quiz
     public getQuestionsOfQuiz(quizid:number):Observable<any>
     {
       return this.httpClient.get(`${baseURL}/question/quiz/${quizid}`);
     }

   // public add Question
   public addQuestion(question:any):Observable<any>
   {
    return this.httpClient.post(`${baseURL}/question/create`,question);
   }

   // delete question
   public deleteQuestion(quesid:any):Observable<any>
   {
    return this.httpClient.delete( `${baseURL}/question/delete/${quesid}`);
   }

   // get single question
   public getQuestion(quesid: number):Observable<any>
   {
      return this.httpClient.get(`${baseURL}/question/quesid/${quesid}`);
   }

   //update question
   public updateQuestion(question:any)
   {
    return this.httpClient.put(`${baseURL}/question/update/`,question);
    
   }


}
