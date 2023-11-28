import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/class/user';
import { LoginService } from 'src/app/service/login.service';

import { Observable, of, Subject, Subscription, forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{



  user:User = new User();

  constructor(private snack: MatSnackBar,private loginservice:LoginService,
    private router:Router){

  }
  ngOnInit(): void {
      
  }

  loginUser()
  {
        console.log("login function called");

        if(this.user.username == '' 
        || this.user.username == null
        || this.user.password == ''
        || this.user.password == null)
        {
          this.snack.open("Username and Password both are required","Cancel",
          {
            duration: 3000,
          });
          return;
        }

        // request to server to generate token

        this.loginservice.generateToken(this.user).subscribe(
          (data:any)=>{
            console.log( data);

            // saving token
            this.loginservice.saveToken(data.token);

            // getting current user 
            this.loginservice.getCurrentUser().subscribe
            (
                    (data:any)=>{
                      
                      console.log(data);
                      console.log("View Authorities: "+ data.authorities[0].authority);
                     
                      // saving current user in local storage
                      this.loginservice.setUser(data);
                      
                      // redirect to Admin Dashboard if Role: ROLE_ADMIN
                      // redirect to User Dashboard if Role: ROLE_USER
                       
                      if(this.loginservice.getUserRole() == 'ROLE_ADMIN')
                      {
                          // go to admin dashboard
                          console.log("Admin has LoggedIn");

                          this.loginservice.loginStatus.next(true);//------------------------

                        //   window.location.href='/dashboard'
                          this.router.navigate(['dashboard']);
                      }
                      else if(this.loginservice.getUserRole() == 'ROLE_NORMAL')
                      {   
                          // go to user dashboard
                          console.log("User has LoggedIn");

                          this.loginservice.loginStatus.next(true);//--------------------------

                       //   window.location.href='/userdashboard'
                      this.router.navigate(['userdashboard']);
                      }
                      else{
                        this.loginservice.logout();
                        
                      }

                    


                    }
                    
            )
      

            
          },
          error=>{
            console.log( error);
            this.snack.open("Invalid Details !! Try again","Cancel",
              {  duration:3000,
              })
            }
        )

       

        

  }
}
