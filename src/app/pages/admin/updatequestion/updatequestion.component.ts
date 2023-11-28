import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/class/question';
import { Quiz } from 'src/app/class/quiz';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit{

  quiz: Quiz = new Quiz();

  quizzes: Quiz[] = [];

  question: Question= new Question();

  // ckeditor variable
  public Editor=ClassicEditor;

  constructor(private activatedroute:ActivatedRoute,
    private quizService:QuizService,
    private questionService: QuestionService,
    private snackBar:MatSnackBar,
    private router:Router){}

  ngOnInit(): void {
      
    this.question.quesid = this.activatedroute.snapshot.params['quesid'];

    this.questionService.getQuestion(this.question.quesid).subscribe
    (
      (data:any)=>{
        this.question = data;
        this.quiz.quizid = data.quiz.quizid;
        this.question.quiz.quizid = data.quiz.quizid;

        //========================================================
            this.quizService.getQuiz(this.quiz.quizid).subscribe(
              (data:any)=>{
                this.quiz = data;
              },error=>{
                Swal.fire("Error !","Error ! quizid not found",error);
              }
            )
        //========================================================


      },(error:any)=>{
        Swal.fire("Error !","Error ! quesid not found",error);
      }
    )


  }

  updateQuestion()
  {
    if(this.question.content == '' || this.question.content == null
    || this.question.option1 == '' || this.question.option1 == null
    || this.question.option2 == '' || this.question.option2 == null
    || this.question.option3 == '' || this.question.option3 == null
    || this.question.option4 == '' || this.question.option4 == null
    || this.question.answer == '' || this.question.answer == null)
    {
      this.snackBar.open("All fields are required !!","Cancel",
      {
        duration: 3000,
      });
      return;
    }

    this.questionService.updateQuestion(this.question).subscribe(
      (data:any)=>{
      
        this.question = new Question();
       
        Swal.fire('Success !!','Question is updated successfully',
        'success').then((e)=>{
          this.router.navigate(['/dashboard/viewquizquestions/' + this.quiz.quizid ]);
        });
            //  this.gotoQuestions();
      },
      error=>{
        Swal.fire('Error !!','Failed to update Question',
        'error');
      }
    )

  }


}
