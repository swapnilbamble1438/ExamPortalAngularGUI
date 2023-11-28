import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/class/category';
import { Quiz } from 'src/app/class/quiz';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.css']
})
export class LoadquizComponent implements OnInit{

  category: Category = new Category();

  categories: Category[] =[];

  quiz: Quiz = new Quiz();

  quizzes:Quiz[] =[];


  constructor(
    private activatedroute:ActivatedRoute,
    private categoryService: CategoryService,
    private quizService: QuizService 
  ){}


  ngOnInit(): void {
    
 //  this.category.catid = this.activatedroute.snapshot.params['catid'];

   this.activatedroute.params.subscribe((params)=>{
    console.log(params);
    this.category.catid = params['catid'];

    if(this.category.catid == 0)
   {
      this.quizService.getAllActiveQuizzes().subscribe(
        (data:any)=>{
          this.quizzes = data;
          console.log("Quizzes: " + this.quizzes);
        },error=>{
          console.log(error);
        }
      )
   }
   else{
      this.quizService.getActiveQuizzesByCategory(this.category.catid).subscribe(
        (data:any)=>{
          this.quizzes = data;
          console.log("Quizzes: " + this.quizzes);
        },error=>{
          console.log(error);
        }
      )

   }



   })
  
  }





}
