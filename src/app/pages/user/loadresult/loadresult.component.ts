import { LocationStrategy } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/class/result';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'loadresult',
  templateUrl: './loadresult.component.html',
  styleUrls: ['./loadresult.component.css']
})
export class LoadresultComponent implements OnInit{


  result: Result = new Result();

  results: Result[] = [];

  constructor(
    private locationStrategy: LocationStrategy,
    private activatedRoute: ActivatedRoute,
    private resultService: ResultService,
    private router: Router,
    private activatedroute:ActivatedRoute
    ){}


  ngOnInit(): void {

 
    this.preventBack();

      this.resultService.getCurrentResult().subscribe(
        (data:any)=>{
          this.result = data;
          console.log("result: " + this.result);
        },error=>{
          console.log(error);
        }
      )
  
   
      
  }

      preventBack(){

        history.pushState(null,"null",location.href);
        this.locationStrategy.onPopState(()=>{
          history.pushState(null,"null",location.href);
        });
    }



   // print page function
   printPage()
   {
     window.print();
   }
}
