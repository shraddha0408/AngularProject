import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/models/user';
import {ApiResponse} from 'src/app/models/api-response';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  createUser(user:User):Observable<ApiResponse> {
    return this.http.post<ApiResponse>("http://localhost:5555/userdata/",user)
  }
}