import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogSaleComponent } from './dialog/dialogSale.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  readonly  with : string = '600 px';
  constructor(
    //estas cosas se injentan en el archivo module
            public dialog : MatDialog,
            public snackBar :MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  openAdd(){
    //esta es la instruccion que abre nuetro dialog , se le pasa el tipo de dialog que queremos abrir en este caso dialog sale y algun otro estilo
    const dialogRef = this.dialog.open(DialogSaleComponent, {
                                        width : this.with
  });
  }

}
