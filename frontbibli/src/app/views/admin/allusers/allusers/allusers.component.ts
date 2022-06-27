import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  dataArray:any
  constructor(private ds:DataService) { 
    this.ds.getallusers().subscribe(data=>this.dataArray=data)

  }
 
  ngOnInit(): void {
  }

}
