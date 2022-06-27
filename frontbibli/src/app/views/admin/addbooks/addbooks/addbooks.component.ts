import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
message=''
  constructor(private ds:DataService,private route:Router) {
    
   }

  ngOnInit(): void {
  }

  
  add(f:any){
   let data=f.value
   console.log(data)
   this.ds.postnewbook(data).subscribe(_Response=>{
     //console.log(Response)
     this.route.navigate(['/admin/allbooks'])
   },(err:HttpErrorResponse)=>{
     this.message=err.error
     //console.log(err.error)
     //console.log(err.status)
     
   })
  }

}
