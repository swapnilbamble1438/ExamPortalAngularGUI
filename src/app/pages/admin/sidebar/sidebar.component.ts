import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private loginService:LoginService,
    private router:Router){}


  ngOnInit(): void {
      
  }




  logoutUser()
  {
    this.loginService.logout();

      window.location.reload();

  }



}
