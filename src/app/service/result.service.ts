import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private httpClient: HttpClient) { }

  // add result
  public addResult(result:any)
  {
    return this.httpClient.post(`${baseURL}/result/create`,result);
  }


  // get Current result
  public getCurrentResult()
  {
    return this.httpClient.get(`${baseURL}/result/current`);
  }

  // get All Results of User
  public getAllResultsOfUser(uid:any)
  {
    return this.httpClient.get(`${baseURL}/result/all/${uid}`) ;
  }

  // delete All Results of User
  public deleteAllResultsOfUser(uid:any)
  {
    return this.httpClient.delete(`${baseURL}/result/deleteall/${uid}`);
  }


    // delete single result of user
    public deleteResult(resultid:number)
    {
      return this.httpClient.delete(`${baseURL}/result/delete/${resultid}`);
    }

}
