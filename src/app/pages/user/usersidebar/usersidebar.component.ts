import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/class/category';
import { Quiz } from 'src/app/class/quiz';
import { CategoryService } from 'src/app/service/category.service';
import { LoginService } from 'src/app/service/login.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit{

  categories:Category[] =[];

  category: Category = new Category();

  

  constructor(
    private categoryService:CategoryService,
    private snack: MatSnackBar,
    private loginService:LoginService,
    private activatedroute:ActivatedRoute,
    private router:Router
    ){}
  

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe(
      (data:any)=>{
        this.categories = data;
      },(error:any)=>{
       
        this.snack.open("Failed to load Categories from server","Cancel",
        {
          duration: 3000,
        });
      }
    )

    //===========================================================
   
    //===========================================================
      
  }




  logoutUser()
  {
    this.loginService.logout();

      window.location.reload();

  }
}
