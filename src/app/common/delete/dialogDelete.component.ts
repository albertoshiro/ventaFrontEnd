//todo componente lo tiene
import { Component  } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    templateUrl: 'dialogDelete.component.html'
})
export class DialogDeleteComponent{
    constructor(
        //este es solo para hacer referencia a si mismo, ocupado para cerrarse a si mismo
        public dialogRef: MatDialogRef<DialogDeleteComponent>
    ){
        

    }
}