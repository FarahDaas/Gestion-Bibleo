import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbooksRoutingModule } from './addbooks-routing.module';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddbooksComponent
    
  ],
  imports: [
    CommonModule,
    AddbooksRoutingModule,
    FormsModule
  ]
})
export class AddbooksModule { }
