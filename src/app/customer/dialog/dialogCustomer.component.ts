//este para ñps decoradores
import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Customer } from "src/app/models/customer";
import { ApiclienteService } from "src/app/services/apicliente.service";

@Component({
    //algo de typescrip que ayuda a dar comportamiento a la clase 
    templateUrl : 'dialogCustomer.component.html'
})


export class DialogClienteComponent{
    public nombre : string = ""; 
    constructor(
        //esto nos ayuda a decir que este componente se va a ser referencia a si mismo con este dialog  
        //necesitamos pasarle el tipo del componente al cual referenciaremos en este caso el mismo , acciones por ejemplo cerrarse
        public dialogRef : MatDialogRef <DialogClienteComponent>,
        //dado que necesitaremos ocupar en estos casos el servicio y metodo post add
        public apiCliente : ApiclienteService,
        //para el mensaje de exito o falla 
        public snackBar : MatSnackBar
        ){
    }



    close(){
        this.dialogRef.close();
    }
    //metodo para insertar un cliente una vez pulse un boton
    addCustomer(){
        const customer : Customer = {name :"La marmota 25"};
        this.apiCliente.add(customer).subscribe(response => {
            if(response.success == 1){
                this.dialogRef.close();
                this.snackBar.open("Cliente insertado cor exito","",{
                    duration : 2000
                })
            }else{
                console.log("el succes esta en  : "+ response.success);
            }
        })

    }
}