import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookdetailsRoutingModule } from './bookdetails-routing.module';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';


@NgModule({
  declarations: [
    BookdetailsComponent
  ],
  imports: [
    CommonModule,
    BookdetailsRoutingModule
  ]
})
export class BookdetailsModule { }
