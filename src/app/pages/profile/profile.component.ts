import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{



  constructor(private activatedroute:ActivatedRoute,
    private loginService:LoginService,
    private router:Router){}

user:User = new User();

userrole = null;

  ngOnInit(): void {


          this.user = this.loginService.getUser();

         this.userrole = this.loginService.getUser().authorities[0].authority;
        
       console.log(this.user.authorities);
  }





}
