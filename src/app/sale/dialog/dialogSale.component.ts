import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Concept } from "src/app/models/concept";
import { Sale } from "src/app/models/sale";
import { ApisaleService } from "src/app/services/apisale.service";

@Component({ 
    templateUrl : 'dialogSale.component.html'
})

export class DialogSaleComponent{
    public sale :Sale;
    public concepts : Concept[];

    public conceptForm = this.formBuilder.group({
        amount : [0, Validators.required],
        idProduct :[1,Validators.required],
        totalPrice : [0, Validators.required]
    });

    constructor(public dialogRef : MatDialogRef<DialogSaleComponent>,
                public snackBar : MatSnackBar,
                private formBuilder : FormBuilder,
                public apiSale : ApisaleService
        ){
            //inicialisas sus modelos
            this.concepts=[];
            this.sale = {idCustomer : 1, concepts:[]} ;
    }

    close(){
        this.dialogRef.close();
    }
    addConcept(){
        //integramos los conceptos
        this.concepts.push(this.conceptForm.value);
    }
    addSale(){
        this.sale.concepts = this.concepts;
        this.apiSale.add(this.sale).subscribe(response =>{
           if(response.success ===1){
               this.dialogRef.close();
               this.snackBar.open('Venta Hecha con éxito ',"",{
                                                        duration : 2000
               });
           }
        })
    }

}