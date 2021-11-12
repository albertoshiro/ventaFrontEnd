import { Component, OnInit } from '@angular/core';

import { ApiclienteService } from '../services/apicliente.service';
import { DialogClienteComponent} from "./dialog/dialogCustomer.component";
import { MatDialog } from "@angular/material/dialog";
import { Customer } from '../models/customer';
import { DialogDeleteComponent } from '../common/delete/dialogDelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public lst : any [""] ;
  //las columnas de un arreglo,para mostrar, se pueden agragar mas
  public columns :string []= ["id","Nombre","actions"];
  readonly witdh : string = '300' ;

  constructor(
    //aqui estamos inyectando nuestro servicio dado que en su clase como tal esta un injectable
    private apiCliente : ApiclienteService,
    //para la ventana dialog
    public dialog : MatDialog,
    public snackBar : MatSnackBar

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
      width : this.witdh
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.getCustomer();
    });
  }
  openEdit(oCustomer : Customer){
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width : this.witdh, 
      data : oCustomer
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getCustomer();
    });

  }
  delete(oCustomer : Customer){
    const dialogRef = this.dialog.open(DialogDeleteComponent,{
      width : this.witdh
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result == true){
        this.apiCliente.delete(oCustomer.id).subscribe(response => {
          if(response.success ===1){
            this.getCustomer();
            this.snackBar.open("Cliente eliminado con exito", "",
              {duration : 2000});
          }
        })
      }
    });
  }
}
