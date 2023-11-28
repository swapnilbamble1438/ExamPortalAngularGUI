import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/class/category';
import { Quiz } from 'src/app/class/quiz';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'viewcategories',
  templateUrl: './viewcategories.component.html',
  styleUrls: ['./viewcategories.component.css']
})
export class ViewcategoriesComponent implements OnInit{

  constructor(private activatedroute:ActivatedRoute,
    private categoryService: CategoryService,
    private quizService: QuizService,
    private snackBar:MatSnackBar){}

  category: Category = new Category();

  categories: Category[] =[];

  quizzes: Quiz[] = [];

  

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe(
      (data:any)=>{
        this.categories = data;
        console.log(data);
      },
      error=>
      {
        console.log(error);
        Swal.fire("Error !","Error in Loading Data ",error);
      }
    )

      
  }


  deleteCategory(catid: number){

    Swal.fire({
      icon:'info',
      'title':"Are you sure?",
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{

      if(result.isConfirmed)  // delete function 
      {
        
        this.quizService.getQuizzesByCategory(catid).subscribe(
          (data:any)=>{
            this.quizzes = data;
           // delete
              if(this.quizzes.length == 0)
              {
                this.categoryService.deleteCategory(catid).subscribe(
                  (data:any)=>{
                  this.categories = this.categories.filter((category)=>category.catid != catid); // filter
                    Swal.fire('Success !!','Category is deleted successfully',
                              'success');
                            //  this.gotoCategories();
                    
                  },(error:any)=>{
                    Swal.fire('Error !!','Failed to delete Category',
                    'error');
                  }
                )
              }
              else{
                this.snackBar.open("Category is not empty. Failed to delete Category","Cancel",
                {
                  duration: 3000,
                });
                return;
              }


          },error=>{
            // fail to delete message
            this.snackBar.open("Failed to delete Category","Cancel",
          {
            duration: 3000,
          });
          return;
          }
        )
            
      }
    })
    
  }

  gotoCategories()
  {
    window.location.href='/dashboard/viewcategories/0';
  }






}
