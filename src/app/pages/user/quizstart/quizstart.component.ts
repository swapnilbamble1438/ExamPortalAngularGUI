import { LocationStrategy } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/class/question';
import { Quiz } from 'src/app/class/quiz';
import { Result } from 'src/app/class/result';
import { Userqna } from 'src/app/class/userqna';
import { LoginService } from 'src/app/service/login.service';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';
import { ResultService } from 'src/app/service/result.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'quizstart',
  templateUrl: './quizstart.component.html',
  styleUrls: ['./quizstart.component.css']
})
export class QuizstartComponent implements OnInit {

  quiz: Quiz = new Quiz();

  question: Question = new Question();
  questions: Question[] = [];

  result: Result = new Result();

  timer:any;

  currentUrl:any;

  userqna: Userqna = new Userqna();
  userqnas : Userqna[] = [
  ];


  public uid !: number;

  constructor(
    private locationStrategy: LocationStrategy,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private quisService: QuizService,
    private questionService: QuestionService,
    private resultService: ResultService,
    private router: Router
    ){}


    ngOnInit(): void {

    

      console.log("this.router.url: " + this.router.url);
     this.currentUrl = this.router.url.substring(0,this.router.url.length -3);
     console.log("test: " +this.router.url.substring(-10,11));
      console.log("currentUrl: " + this.currentUrl);
      


        this.preventBack();


      this.quiz.quizid =  this.activatedRoute.snapshot.params['quizid'];
      
      console.log(this.quiz.quizid);

      this.loadQuestions();
      this.loadQuiz();

     this.uid = this.loginService.getUserId();

     
    }

    preventBack(){

        history.pushState(null,"null",location.href);
        this.locationStrategy.onPopState(()=>{
          history.pushState(null,"null",location.href);
        });

      
    }

    

    loadQuestions()
    {
      this.questionService.getQuestionsOfQuiz(this.quiz.quizid).subscribe(
        (data:any)=>{
          this.questions = data;
        console.log(this.questions);

        this.questions.forEach((q)=>{  // here we have empty the answer of all questions
          q.answer ='';
        });
          // seconds are store in a timer
          this.timer = this.questions.length * 1* 180; // means for 1 question there will be 180 seconds
                                                   
                                                    //and for 10 questions there will be 1800 seconds means 30 minutes

          this.startTimer();

        

        },error=>{
          console.log(error);
          Swal.fire('Error','Error in loading Questions of Quiz','error');
        }
      )
    }


    loadQuiz(){
      this.quisService.getQuiz(this.quiz.quizid).subscribe(
        (data:any)=>{
          this.quiz = data;
          this.questions[0].quiz.imagefile;
          
        },error=>{
          console.log(error);
          Swal.fire('Error','Failed in loading Quiz Image','error');
        }
      )
    }



    submitQuiz()
    {

        // this.questions.forEach((q)=>{
        //   if(q.answer != "")
        //   {
        //     q.attempted ++;
        //   }

        // });
        

        Swal.fire({
          title: 'Do yo want to submit the Quiz?',
          showCancelButton: true,
          confirmButtonText: `Submit`,
          icon:'info',
        }).then((result)=>{
          if(result.isConfirmed){
        
              this.doSubmitQuiz();
          }
        })


      }


      loadCurrentResult()
      {
        this.resultService.getCurrentResult().subscribe(
          (data:any)=>{
            this.result = data;
            console.log("Result: " + this.result);
          },(error:any)=>{
              Swal.fire("Error !","Error ! Failed to load Current Result",error);
          }
         )
      }
      
      
      // this is for spinner
      t:any;
      startTimer()
      {
        console.log("old this.t: " + this.t);

         this.t =  window.setInterval(()=>{
          console.log("new this.t: " + this.t);

          if(this.router.url.substring(-10,11) != "/quizstart/")
          {
            clearInterval(this.t);
            return;   
          }
    
          if(this.timer <= 0)
          {
            this.doSubmitQuiz();
            clearInterval(this.t);
          }else{
            this.timer--; 
          }

        },1000);
      }


      //
      getTimerFormat()
      {
        let min=Math.floor(this.timer/60);
        let sec=this.timer -min *60;
        return `${min}: min: ${sec} sec`;
      }


      doSubmitQuiz()
      {
       

        this.result.uid = this.uid;
      this.result.quizid = this.quiz.quizid;
      this.result.numofquestions = this.quiz.numofquestions;

        this.userqnas = this.questions;
         this.result.userqnas = this.userqnas;



        this.resultService.addResult(this.result).subscribe(
          (data:any)=>{
            
           
            Swal.fire('Success !!','Quiz is submitted successfully','success');

           // this.result = data;
           this.router.navigate(['/userdashboard/loadresult']);
       

          },error=>{
            Swal.fire('Error !!','Failed to submit Quiz','error');
            this.router.navigate(['/userdashboard/quizintro/'+this.quiz.quizid]);
          }
        )
        

      }
      


      // print page function
      printPage()
      {
        window.print();
      }



}
