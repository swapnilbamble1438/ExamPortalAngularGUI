import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Category } from 'src/app/class/category';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit{

  category:Category = new Category();

  constructor(private categoryService:CategoryService,
    private snackBar:MatSnackBar,
    private router:Router){}

    addCategory(){
            console.log(this.category);
            if(this.category.title == '' 
            || this.category.title == null
            || this.category.description == ''
            || this.category.description == null)
            {
              console.log("addCategory() function called");

              this.snackBar.open("Title Required !!","Cancel",{
                duration: 3000
              });
              return;
            }
            this.categoryService.addCategory(this.category).subscribe(
              (data:any)=>{
                  this.category = new Category();
                  Swal.fire('Success !!','Category is added successfully',
                  'success');
                  this.gotoCategories();
              },
              error=>{
                console.log(error);
                Swal.fire('Error !!','Failed to add Category',
                'error');
              }
            );


     
    }

    gotoCategories()
    {
      this.router.navigate(['/dashboard/viewcategories']);
    }

  ngOnInit(): void {
      
  }
}
