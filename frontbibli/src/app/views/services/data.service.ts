import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:any=localStorage.getItem('token')
  headeradmin=new HttpHeaders()

.set('authorization',this.token)
.set('role','admin')


params=new HttpParams()
.set('secret',environment.secret)
.set('client',environment.client)

headerall=new HttpHeaders()

.set('authorization',this.token)

  constructor(private http:HttpClient) { }

  getallbook(){
    return this.http.get(environment.urlBackend+'books',{headers:this.headerall,params:this.params})
  }
  getallusers(){
    return this.http.get(environment.urlBackend+'users',{headers:this.headeradmin,params:this.params})
  }

  postnewbook(profile:any){

    return this.http.post(environment.urlBackend+'addbook',profile,{headers:this.headeradmin,params:this.params})
  }
  deletebook(id:any){
    return this.http.delete(environment.urlBackend+'book/'+id,{headers:this.headeradmin,params:this.params})

  }
  updatebook(id:any,profile:any){
    return this.http.patch(environment.urlBackend+'book/'+id,profile,{headers:this.headeradmin,params:this.params})

  }
  getonebook(id:any){
    return this.http.get(environment.urlBackend+'book/'+id,{headers:this.headerall,params:this.params})

  }
}
