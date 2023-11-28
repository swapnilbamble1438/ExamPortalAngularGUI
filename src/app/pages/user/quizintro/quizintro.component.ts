import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/class/category';
import { Quiz } from 'src/app/class/quiz';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'quizintro',
  templateUrl: './quizintro.component.html',
  styleUrls: ['./quizintro.component.css']
})
export class QuizintroComponent implements OnInit{

  quiz: Quiz = new Quiz();

  quizzes: Quiz[] = [];

  category: Category= new Category();

  constructor(private activatedroute:ActivatedRoute,
    private quizService:QuizService,
    private router:Router,
    private snackBar:MatSnackBar){}


  ngOnInit(): void {

      this.quiz.quizid = this.activatedroute.snapshot.params['quizid'];

      this.quizService.getQuiz(this.quiz.quizid).subscribe(
        (data:any)=>{
          this.quiz = data;

        },error=>{
         
                this.snackBar.open("Failed to load data of Quiz with quizid","Cancel",
                {  duration:3000,
                })
        }
      
      )

  }

  startQuiz()
  {
    Swal.fire({
      title: 'Do yo want to start the Quiz?',
      showCancelButton: true,
      confirmButtonText: `Start`,
      icon:'info',
    }).then((result)=>{
      /* Reload more about isConfirmed, isDenied below */
      if(result.isConfirmed){

        this.router.navigate(['/quizstart/' + this.quiz.quizid]);

      } else if(result.isDenied){
        Swal.fire('Changes are not saved','','info')
      }
    })
  }


}
