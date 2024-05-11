import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  getUsers(page: number){
    return this.http.get(this.baseUrl+`?page=${page}`)
  }

  getSingleUser(id: number){
    return this.http.get(this.baseUrl+`/${id}`)
  }
}