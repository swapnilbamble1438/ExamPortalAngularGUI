import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/class/category';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit{

  category:Category = new Category();

  constructor(private activatedroute:ActivatedRoute,
    private categoryService:CategoryService,
    private snackBar:MatSnackBar,
    private router:Router){}

  ngOnInit(): void {
      
    this.category.catid =  this.activatedroute.snapshot.params['catid'];

    this.categoryService.getCategory(this.category.catid).subscribe(
      (data:any)=>{
        this.category = data;
      },error=>{
        Swal.fire("Error !","Error ! catid not found",error);
      }
      
    )

  }


  updateCategory(){
    console.log(this.category);
    if(this.category.title == '' 
    || this.category.title == null
    || this.category.description == ''
    || this.category.description == null)
    {
      console.log("updateCategory() function called");

      this.snackBar.open("Title Required !!","Cancel",{
        duration: 3000
      });
      return;
    }
    this.categoryService.updateCategory(this.category).subscribe(
      (data:any)=>{
          this.category = new Category();
          Swal.fire('Success !!','Category is updated successfully',
          'success');
          this.gotoCategories();
      },
      error=>{
        console.log(error);
        Swal.fire('Error !!','Failed to update Category',
        'error');
      }
    );



}


  

  gotoCategories()
  {
    this.router.navigate(['/dashboard/viewcategories']);
  }
}
