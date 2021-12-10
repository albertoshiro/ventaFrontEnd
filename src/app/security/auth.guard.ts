//para poder injectar este modulo , es necesario
import { Injectable } from "@angular/core";
//para poder indicarle a que url se dirigira en caso de no tener sesión
import { Router , CanActivate,ActivatedRouteSnapshot} from "@angular/router";
import { ApiAuthService } from "../services/apiAuth.service";

@Injectable({providedIn : 'root'})

export class AuthGuard implements CanActivate{
    //con esl objeto tipo router podemos navegar en la aplicación
    constructor (private router : Router, private apiAuthService :ApiAuthService){

    }

    //implementamos una interfas llamada CanActivate por lo que devemos cumplir con siertas reglas 
    //este metodo resivira datos de la ruta en lacual estara presente el componente en el que te encuentras
    canActivate( router : ActivatedRouteSnapshot ){
        const usuario =this.apiAuthService.userData;
        if(usuario){
            return true;
        }
        
        
        //con la siguiente linea le indicas que si no tienes sesión llevalo a esta ruta
        //si no tines sesion navega a la ruta login
        this.router.navigate(['/login']);
        return false ;
    }
}