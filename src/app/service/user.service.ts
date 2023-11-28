import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  constructor(private httpClient: HttpClient) { }

  addUser(user:User)
  {
    return this.httpClient.post(`${baseURL}/user/create`,user);
  }



}
