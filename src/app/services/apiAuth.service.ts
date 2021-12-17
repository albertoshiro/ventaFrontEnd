import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Response } from "../models/response";
import { User } from "../models/user";
import { map } from "rxjs/operators";
import { resolveSanitizationFn } from "@angular/compiler/src/render3/view/template";
import { Login } from "../models/login";
//para hacer servicioas es bueno hacerlos observales 
const httpOption ={
    //este objeto nos da las opciones para enviar informacion a el WS
   headers : new HttpHeaders({
     'Contend-Type' : 'application/json'
    })
  };

@Injectable({
    providedIn : "root"

})

export class ApiAuthService {
    
    url : string = "https://localhost:44396/api/User/login";
//devemos darle el tipo que lo va a representar
    private userSubject :  BehaviorSubject<User>;
    public usuario : Observable<User>;
    //ahora bien optendremos el valor del objeto userSubject, solo el valor no el objeto
    public get usuarioData(): User{
       return this.userSubject.value;
    };

    constructor(private _http : HttpClient){
        //de esta manera cuando se realiza el constructor se tomara del local storage el usuario en caso de que tenga alguna sesion iniciada
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("usuario")));
        this.usuario =this.userSubject.asObservable();

    }

    login(login : Login): Observable<Response>{
        //pipe nos ayuda a realizar funciones, con el resultado de un observable por ejemplo filter, map(una operacion por aca elemento )
        //login tine 2 campos emial y password
        return this._http.post<Response>(this.url ,login, httpOption).  
        pipe(map(res=>{
                if(res.success === 1){
                    const usuario : User = res.data;
                    //este elemento se guarda en el navegador
                    localStorage.setItem("usuario",JSON.stringify(usuario));
                    //en los observables cuando se ejecuta el metodo next es para que notifiquen que existio un cambio , se puede ocupar para notificar que se muestre una parte del menu segun sea el usuario
                    this.userSubject.next(usuario);
                    console.log("se guardo el usuario ");
                }
                return res;                                                                  
            
        })
        );
    }

    logOut(){
        //este metodo sera para cerrar sesión 
        //si se quiere hacer le log aunt se tiene que remover de donce esta guardado
        localStorage.removeItem("usuario");
        this.userSubject.next(null);
    }
}