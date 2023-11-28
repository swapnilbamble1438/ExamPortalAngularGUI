import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private userservice:UserService,
    private router:Router,
    private snack:MatSnackBar) {
    
  }

  // public user={
  //   username:'',
  //   password:'',
  //   firstname:'',
  //   lastname:'',
  //   email:'',
  //   phone:''
  // }

  user:User = new User();


  ngOnInit(): void {
      
  }

  registerUser()
  {

    console.log(this.user);

    if(this.user.username == '' || this.user.username == null)
    {
      // alert('User Name is required !!');
      this.snack.open("User Name is required !!","Cancel",
      {
        duration:3000,
        verticalPosition:'bottom',
        horizontalPosition:'center'
      });
       return;
    }
   
    // validate

    // addUser() from userservice
    this.userservice.addUser(this.user).subscribe(
      data=>{
        console.log(data);
        //alert('success');
        Swal.fire('Success Done!!','User Successfully Registered','success');
      },
      error=>{
        console.log(error);
        //alert("something went wrong");
        this.snack.open("Something went wrong !!","Cancel",
        {
          duration:3000,
          verticalPosition:'bottom',
          horizontalPosition:'center'
        });
         
       
      }

    )
  }

  gotoSignup()
  {
    this.router.navigate(['/signup']);
  }
}
