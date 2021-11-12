import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//este es para menus de material
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatTableModule} from "@angular/material/table";
//ventana modal
import { MatDialogModule } from "@angular/material/dialog";
//botones de material
import { MatButtonModule } from "@angular/material/button";
//casas de texto
import { MatInputModule } from "@angular/material/input";
//barra de avisos
import { MatSnackBarModule } from "@angular/material/snack-bar";
//para formularios 
import { FormsModule } from "@angular/forms";

import { DialogClienteComponent } from "../app/customer/dialog/dialogCustomer.component";
//para realizar solicitudes http
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { DialogDeleteComponent } from "./common/delete/dialogDelete.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    DialogClienteComponent,
    DialogDeleteComponent
  
  ],
  imports: [
    BrowserModule,
    //para solicitudes http
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //para menus
    MatSidenavModule,
    
    //para tablas
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
    ,MatInputModule,
    FormsModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
