import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import baseURL from './helper';
import { Token } from '@angular/compiler';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructorr() { }


  public loginStatus =new Subject<boolean>();   //-------------


  constructor(private httpClient: HttpClient) { }

  // current user: which is loggedin
  public getCurrentUser()
  {
    return this.httpClient.get(`${baseURL}/currentuser`);
  }

  // current user: which is loggedin
  public getLoggedInUser()
  {
    return this.httpClient.get(`${baseURL}/loggedinuser`);
  }

  // generate token

  public generateToken(user:User){

    return this.httpClient.post(`${baseURL}/token`,user);
  }


  // saveToken: save token in localStorage
  public saveToken(token:any)
  {
    localStorage.setItem('token',token);

    return true;
  }

  // isLogin: to check user is logged in or not
  public isLoggedIn()
  {
    let tokenStr= localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == ''
    || tokenStr == null)
      {
        return false;
      }
      else{
        return true;
      }
  }

  // logout: remove token from local storage
  public logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    return true;
  }

  // getToken : function to get token
  public getToken()
  {
    return localStorage.getItem('token');
  }

  // setUser : save User Details in local storage
  public setUser(user:User)
  {
    localStorage.setItem('user',JSON.stringify(user));
  }

  //getUser: 
  public getUser()
  {
      let userStr = localStorage.getItem('user');
      if(userStr != null || userStr != undefined)
      {
        return JSON.parse(userStr);
      }
      else{
  
        return null;
      }
  }

  // get user role
  public getUserRole()
  {
      let user = this.getUser();
       return user.authorities[0].authority;

  }

  // get user id
  public getUserId()
  {
    let user = this.getUser();
    return user.uid;
  }


}
