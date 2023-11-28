import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;

  public uname = '';

  public role = '';
  public admorusr='';


  user: User= new User();

  constructor(public loginService: LoginService,
    private router:Router)
  {

  }

  ngOnInit(): void {
       this.loggedIn = this.loginService.isLoggedIn();

      // this.loginService.getUser().subscribe(
      //   (data:any)=>
      //   {
      //     this.uname= data.username;
      //   }
      //  );
        if(this.loggedIn)
        {
          this.uname = this.loginService.getUser().firstname;

          
         this.role = this.loginService.getUserRole();
         if(this.role != 'ROLE_ADMIN')
         {
            this.admorusr = 'user';
         }

         
         
        }

          this.loginService.loginStatus.asObservable().subscribe    //------------------
          (data=>{                                                  //
            this.loggedIn = this.loginService.isLoggedIn();         //
            this.uname = this.loginService.getUser().firstname;     //
          })  
          
          //----------------------
       
  }

  logoutUser()
  {
    this.loginService.logout();

      window.location.reload();

  }


}
