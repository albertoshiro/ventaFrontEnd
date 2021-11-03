import { Component, OnInit } from '@angular/core';

import { ApiclienteService } from '../services/apicliente.service';
import {  DialogClienteComponent} from "./dialog/dialogCustomer.component";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public lst : any [""] ;
  //las columnas de un arreglo
  public columns :string []= ["id","Nombre"];
  constructor(
    //aqui estamos inyectando nuestro servicio dado que en su clase como tal esta un injectable
    private apiCliente : ApiclienteService,
    //para la ventana dialog
    public dialog : MatDialog

  ) {   
  }
  ngOnInit(): void {
    //aca va lo de angular, ngOnInit se ejecuta justo despues del contructor
    this.getCustomer();
  }

  getCustomer (){
    //desde aqui solicitamos una solicitud http get, utilizaremos el servicio para conectarnos y demas 
    this.apiCliente.getCustomer().subscribe(response => {
    this.lst = response.data;
    });
  }
  openAdd() {
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width : '300'
    });
  }
}
