import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';
import { Category } from '../class/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  // get all categories
  public getAllCategories()
  {
    return this.httpClient.get(`${baseURL}/category/all`);
  }

  // add/create new category
  public addCategory(category:Category)
  {
    return this.httpClient.post(`${baseURL}/category/create`,category);
  }

  // update category
  public updateCategory(category:Category)
  {
    return this.httpClient.put(`${baseURL}/category/update`,category);
  }

  // delete category
  public deleteCategory(catid:number):Observable<any>
  {
    return this.httpClient.delete(`${baseURL}/category/delete/${catid}`);
  }

  // get single category
  public getCategory(catid:number):Observable<any>
  {
    return this.httpClient.get(`${baseURL}/category/catid/${catid}`);
  }

  
}
