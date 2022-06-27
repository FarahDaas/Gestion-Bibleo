import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)},
    {path:'about',loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},
    {path:'books',loadChildren:()=>import('./views/front/books/books.module').then(m=>m.BooksModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'book/:id',loadChildren:()=>import('./views/front/bookdetails/bookdetails.module').then(m=>m.BookdetailsModule)},
    
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},   
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'allbooks',loadChildren:()=>import('./views/admin/allbooks/allbooks.module').then(m=>m.AllbooksModule)},
    {path:'addbooks',loadChildren:()=>import('./views/admin/addbooks/addbooks.module').then(m=>m.AddbooksModule)},
    {path:'bookdetails/:id',loadChildren:()=>import('./views/admin/bookdetails/bookdetails.module').then(m=>m.BookdetailsModule)},   
    {path:'allusers',loadChildren:()=>import('./views/admin/allusers/allusers.module').then(m=>m.AllusersModule)},
    ]},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
