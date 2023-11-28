import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Category } from 'src/app/class/category';
import { Quiz } from 'src/app/class/quiz';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit{

  constructor(private activatedroute:ActivatedRoute,
    private categoryService: CategoryService,
    private quizService:QuizService,
    private snackBar:MatSnackBar,
    private router:Router){}

  category: Category = new Category();

  categories: Category[] =[];

  quiz:Quiz= new Quiz();

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (data:any)=>{
        this.categories = data;
       
      },error=>{
        Swal.fire("Error !","Error in Loading Category List ",error);
      }
  
    )
      
  }

  

  //=======================================================================================


  imagefile !: File;


  selectedFile(event:any){
    console.log(event.target.files[0])
    this.imagefile = event.target.files[0];
  }

  addQuiz()
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

    
        this.quizService.createQuiz(this.quiz,this.imagefile,this.category).subscribe(
          (data:any)=>{
            this.category = new Category();
            this.quiz = new Quiz();
            
            Swal.fire('Success !!','Quiz is added successfully',
                  'success');
                  this.gotoQuizzes();
          },
          error=>{
            Swal.fire('Error !!','Failed to add Quiz',
            'error');
          }
        )
  }


  gotoQuizzes()
  {
    this.router.navigate(['/dashboard/viewquizzes']);
  }


}
