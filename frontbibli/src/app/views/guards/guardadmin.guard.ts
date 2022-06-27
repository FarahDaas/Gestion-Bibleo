import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { Promise } from 'mongoose';
import { Observable } from 'rxjs';
import { AuthadminService } from '../services/authadmin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardadminGuard implements CanActivate {
  constructor(private as:AuthadminService,private route:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
     
      return new Promise((resolve:any,reject:any)=>{
        if(this.as.LoggedIn()==true){
          
        resolve(true)
      }
      else{
        this.route.navigate(['/admin/login'])
        localStorage.removeItem('token')
        resolve(false)
  
      }
      })
     
    }
  
}
