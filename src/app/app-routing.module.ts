import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { SaleComponent } from './sale/sale.component';
import { AuthGuard } from './security/auth.guard';

//aqui es donde enrutaremos, como un objeto en una lista o json
const routes: Routes = [
  //en caso de vacios en las url, todos tienen un canActivate, señalando al AuthGuard, para que tengan forzosamente una autorizacion para poder ser utilizadas estas rutas, si no fuera el caso los llevara al el componente login
  {path: ' ',redirectTo: '/home', pathMatch: 'full'},
  {path:'home' , component : HomeComponent,  canActivate : [AuthGuard]}, 
  {path:'customer' ,component: CustomerComponent, canActivate : [AuthGuard]},
  { path : 'login', component : LoginComponent },
  {path : 'sale', component : SaleComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
