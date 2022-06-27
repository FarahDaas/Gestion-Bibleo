import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  constructor(private  http:HttpClient) { }

register(body:any){
return this.http.post('http://localhost:3001/register',body)
}


login(body:any){
  return this.http.post('http://localhost:3001/register',body)
  }
  savetoken(token:any){
    localStorage.setItem('token',token)
  }
}


