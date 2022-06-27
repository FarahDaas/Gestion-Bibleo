import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
id=''
dataobject:any
messageerr=''
  constructor(private route:ActivatedRoute, private ds:DataService) { 

    this.route.params.subscribe(params=>this.id=params['id'])
    this.ds.getonebook(this.id).subscribe(Response=>this.dataobject=Response,(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageerr="we don't found this book in our database"})
  }

  ngOnInit(): void {
  }

}
