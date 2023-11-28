import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/class/question';
import { Quiz } from 'src/app/class/quiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'viewquizquestions',
  templateUrl: './viewquizquestions.component.html',
  styleUrls: ['./viewquizquestions.component.css']
})
export class ViewquizquestionsComponent implements OnInit{

  quiz: Quiz = new Quiz();

  quizzes: Quiz[] = [];

  question: Question = new Question();

  questions: Question[] = [];

  constructor(private activatedroute:ActivatedRoute,
    private router:Router,
    private snackBar:MatSnackBar,
    private quizService: QuizService,
    private questionService: QuestionService){}

  ngOnInit(): void {
  
    // this.quiz.quizid =  this.activatedroute.snapshot.params['quizid'];
    //   console.log("QuizId: "+this.quiz.quizid);

      this.activatedroute.params.subscribe((params)=>{
        console.log(params);
        this.quiz.quizid = params['quizid'];
    
              this.questionService.getAllQuestionsOfQuiz(this.quiz.quizid).subscribe(
              (data:any)=>{
                this.questions = data;
              console.log("Details: " + this.questions);

              },error=>{
                Swal.fire("Error !","Error in Loading Data ",error);
              }

            );

              this.quizService.getQuiz(this.quiz.quizid).subscribe(
                (data:any)=>{
                  this.quiz = data;
                },error=>{
                  Swal.fire("Error !","Error ! quizid not found",error);
                }
            );

              })
            
    }


  
  deleteQuestion(quesid: number){

    Swal.fire({
      icon:'info',
      'title':"Are you sure?",
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{

      if(result.isConfirmed)  // delete function 
      {
            this.questionService.deleteQuestion(quesid).subscribe(
              (data:any)=>{
              this.questions = this.questions.filter((question)=>question.quesid != quesid); // filter
                Swal.fire('Success !!','Question is deleted successfully',
                          'success');
                        //  this.gotoQuestions();
                
              },(error:any)=>{
                Swal.fire('Error !!','Failed to delete Question',
                'error');
              }
            )
            
      }
    })
    
  }

  
  gotoQuestions()
  {
    window.location.href='/dashboard/viewquizquestions/'+ this.quiz.quizid+ '/'+ this.quiz.title;
  }

}
