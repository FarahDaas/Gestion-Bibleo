import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllbooksRoutingModule } from './allbooks-routing.module';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllbooksComponent
  ],
  imports: [
    CommonModule,
    AllbooksRoutingModule,
    FormsModule
    

  ]
})
export class AllbooksModule { }
