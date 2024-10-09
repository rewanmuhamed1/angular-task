import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data,User } from '../interfaces/user';
import { catchError } from 'rxjs/operators';
import { Observable,  publishReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://reqres.in/api/users';  // URL to web api
  
  private users$!: Observable<any>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  
 
  getUsers(page:number)  {
    return this.http.get(this.usersUrl+'?page='+page)
      .pipe(
        catchError(error => { throw error })
      );
  }



  getUser(id: number):Observable<User>{
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
     
      catchError(error => { throw error })
    );
  }



}
