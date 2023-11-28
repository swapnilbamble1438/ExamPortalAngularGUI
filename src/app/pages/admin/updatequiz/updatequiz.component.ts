import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/class/category';
import { Quiz } from 'src/app/class/quiz';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'updatequiz',
  templateUrl: './updatequiz.component.html',
  styleUrls: ['./updatequiz.component.css']
})
export class UpdatequizComponent implements OnInit {

  category: Category = new Category();

  categories: Category[] =[];

  quiz: Quiz = new Quiz();

  constructor(private activatedroute:ActivatedRoute,
    private quizService:QuizService,
    private categoryService: CategoryService,
    private snackBar:MatSnackBar,
    private router:Router){}



    ngOnInit(): void {
      this.quiz.quizid =  this.activatedroute.snapshot.params['quizid'];
      
      this.quizService.getQuiz(this.quiz.quizid).subscribe(
          (data:any)=>{
            this.quiz = data;
            this.category.catid = data.category.catid;
          },error=>{
            Swal.fire("Error !","Error ! quizid not found",error);
          }
      )

      this.categoryService.getAllCategories().subscribe(
        (data:any)=>{
          this.categories = data;
         
        },error=>{
          Swal.fire("Error !","Error in Loading Category List ",error);
        }
    
      )

    }

//==============================================================================================


imagefile !: File;


selectedFile(event:any){
  console.log(event.target.files[0])
  this.imagefile = event.target.files[0];
}

    updateQuiz()
    {
      console.log(this.quiz);

          if(this.quiz.title == '' || this.quiz.title == null
          || this.quiz.description == '' || this.quiz.description == null
          || this.quiz.maxmarks == 0 || this.quiz.maxmarks <= 0
          || this.quiz.numofquestions == 0 || this.quiz.numofquestions <= 0
          || this.category.catid == 0 || this.category.catid <= 0)
          {
            this.snackBar.open("Title,Description,MaxMarks,NumofQuestions,Category this fields are required !!","Cancel",
            {
              duration: 3000,
            });
            return;
          }

    
        this.quizService.updateQuiz(this.quiz,this.imagefile,this.category).subscribe(
          (data:any)=>{
            this.category = new Category();
            this.quiz = new Quiz();
            
            Swal.fire('Success !!','Quiz is updated successfully',
                  'success').then((e)=>{
                    this.router.navigate(['/dashboard/viewquizzes']);
                  });
              //    this.gotoQuizzes();
          },
          (error:any)=>{
            Swal.fire('Error !!','Failed to update Quiz',
            'error');
          }
        )
    }

    
        gotoQuizzes()
        {
          this.router.navigate(['/dashboard/viewquizzes']);
        }


}
