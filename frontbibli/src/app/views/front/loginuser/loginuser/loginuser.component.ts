import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
datatoken:any
  constructor(private aus:AuthuserService , private route:Router) { }

  ngOnInit(): void {
  }
  login(f:any){
    let data=f.value
    this.aus.login(data).subscribe(data=>{
      this.datatoken=data
      this.aus.savetoken(this.datatoken.token)
      this.route.navigate(['/home'])
    })
  }
}
