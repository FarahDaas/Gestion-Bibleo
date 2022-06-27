import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  dataArray:any=[]
  databooks={
    id:'',
    title:'',
    discription:'',
    author:'',
    price:0,
    image:''
  }
  messagessucces=''
  constructor(private ds:DataService,private route:Router) { 
    this.ds.getallbook().subscribe(data=>this.dataArray=data)
  }

  ngOnInit(): void {
  }

  delete(id:any,i:number){
    this.ds.deletebook(id,).subscribe(Response=>{
      console.log(Response)
      this.dataArray.splice(i,1)
    })
  }

   getdata(id:any,title:string,discription:string,author:string,price:number,image:string){
    this.messagessucces=''
    this.databooks.id=id
    this.databooks.title=title
    this.databooks.discription=discription
    this.databooks.author=author
    this.databooks.price=price
    this.databooks.image=image
  
    console.log(this.databooks)
  }


  
  updatenewbook(f:any){
    let data=f.value
    this.ds.updatebook(this.databooks.id,data).subscribe(Response=>{
      console.log(Response)
      let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.databooks.id)
    
      this.dataArray[indexId].title=data.title
      this.dataArray[indexId].discription=data.discription
      this.dataArray[indexId].author=data.author
      this.dataArray[indexId].price=data.price
      this.dataArray[indexId].image=data.image

      this.messagessucces='this student ${this.dataArray[indexId].title} is updated'


  },(err:HttpErrorResponse)=>{
      console.log(err.message)
    })
  }
  
  details(id:any){
    this.route.navigate(['/admin/bookdetails/'+id])

  }
  
  }