import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from "./home/home.component";

//aqui es donde enrutaremos, como un objeto en una lista o json
const routes: Routes = [
  //en caso de vacios en las url
  {path:"",redirectTo:'/home', pathMatch:'full'},
  {path:"home" , component : HomeComponent},
  {path:"customer",component: CustomerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
