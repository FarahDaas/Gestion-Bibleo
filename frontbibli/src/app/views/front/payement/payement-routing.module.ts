import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayementComponent } from './payement/payement.component';

const routes: Routes = [
  {path:'',component:PayementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayementRoutingModule { }
