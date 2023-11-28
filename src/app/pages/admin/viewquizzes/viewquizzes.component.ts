import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/class/quiz';
import { QuizService } from 'src/app/service/quiz.service';
import { Buffer } from "buffer";
import Swal from 'sweetalert2';
import { Category } from 'src/app/class/category';

@Component({
  selector: 'viewquizzes',
  templateUrl: './viewquizzes.component.html',
  styleUrls: ['./viewquizzes.component.css']
})
export class ViewquizzesComponent implements OnInit{

  quiz: Quiz = new Quiz();

  quizzes: Quiz[] = [];

  category: Category= new Category();


  constructor(private activatedroute:ActivatedRoute,
    private quizService:QuizService,
    private router:Router){}

  ngOnInit(): void {

    // this.quizService.getAllQuizzes().subscribe(
    //   (data:any)=>{
    //      this.quizzes = data;
        

    //   },
    //   error=>{
    //     console.log(error);
    //     Swal.fire("Error !","Error in Loading Data ",error);
    //   }

    // )  

    //  this.category.catid = this.activatedroute.snapshot.params['catid'];

    this.activatedroute.params.subscribe((params)=>{
      console.log(params);
      this.category.catid = params['catid'];
  
      if(this.category.catid == 0)
     {
        this.quizService.getAllQuizzes().subscribe(
          (data:any)=>{
            this.quizzes = data;
            console.log("Quizzes: " + this.quizzes);
          },error=>{
            console.log(error);
          }
        )
     }
     else{
        this.quizService.getQuizzesByCategory(this.category.catid).subscribe(
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


  deleteQuiz(quizid: number){

    Swal.fire({
      icon:'info',
      'title':"Are you sure?",
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{

      if(result.isConfirmed)  // delete function 
      {
            this.quizService.deleteQuiz(quizid).subscribe(
              (data:any)=>{
              this.quizzes = this.quizzes.filter((quiz)=>quiz.quizid != quizid); // filter
                Swal.fire('Success !!','Quiz is deleted successfully',
                          'success');
                        //  this.gotoQuizzes();
                
              },(error:any)=>{
                Swal.fire('Error !!','Failed to delete Quiz',
                'error');
              }
            )
            
      }
    })
    
  }

  gotoQuizzes()
  {
    window.location.href='/dashboard/viewquizzes';
  }


}
