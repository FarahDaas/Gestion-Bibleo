import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
id:any
databooks:any
  constructor(private ds:DataService,private aroute:ActivatedRoute) { 

    this.aroute.params.subscribe(data=>this.id=data['id'])
  }

  ngOnInit(): void {
    this.ds.getonebook(this.id).subscribe(data=>this.databooks=data)
  }

}


