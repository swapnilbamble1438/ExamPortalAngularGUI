import { LocationStrategy } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/class/quiz';
import { Result } from 'src/app/class/result';
import { LoginService } from 'src/app/service/login.service';
import { QuizService } from 'src/app/service/quiz.service';
import { ResultService } from 'src/app/service/result.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'loadallresults',
  templateUrl: './loadallresults.component.html',
  styleUrls: ['./loadallresults.component.css']
})
export class LoadallresultsComponent implements OnInit{

  result: Result = new Result();

  results: Result[] = [];

  quizzes: Quiz[] = [];

  public uid !: number;

  constructor(
    private locationStrategy: LocationStrategy,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private resultService: ResultService,
    private router: Router,
    private activatedroute:ActivatedRoute,
    private quizService: QuizService
    ){}


  ngOnInit(): void {

    this.uid = this.loginService.getUserId();

    this.resultService.getAllResultsOfUser(this.uid).subscribe(
      (data:any)=>{
        this.results = data;
        console.log("result: " + this.result);
      },error=>{
        console.log(error);
      }
    )



    this.quizService.getAllQuizzes().subscribe(
      (data:any)=>{
        this.quizzes = data;
        console.log("Quizzes: " + this.quizzes);
      },error=>{
        console.log(error);
      }
    )
      
  }


  // deleteAll Results
  deleteResult(resultid:number)
  {
    Swal.fire({
      icon:'info',
      'title':"Are you sure?",
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{

      if(result.isConfirmed)  // delete function 
      {
            this.resultService.deleteResult(resultid).subscribe(
              (data:any)=>{
              this.results = this.results.filter((result)=>result.resultid != resultid); // filter
                Swal.fire('Success !!','Result deleted successfully',
                          'success');
                        
                
              },(error:any)=>{
                Swal.fire('Error !!','Failed to delete Result',
                'error');
              }
            )
            
      }
    })
  }
}
