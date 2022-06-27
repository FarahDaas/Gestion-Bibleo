import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
databooks:any
  constructor(private ds:DataService,private route:Router) { 
    this.ds.getallbook().subscribe(data=>this.databooks=data)
  }

  ngOnInit(): void {
  }
  
godetails(id:any){
  this.route.navigate(['book/'+id])
}
}
