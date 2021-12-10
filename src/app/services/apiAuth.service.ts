import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Response } from "../models/response";
import { User } from "../models/user";
import { map } from "rxjs/operators";
import { resolveSanitizationFn } from "@angular/compiler/src/render3/view/template";
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

    private userSubject :  BehaviorSubject<User>;
    //ahora bien optendremos el valor del objeto userSubject, solo el valor no el objeto
    public get userData(): User{
        return this.userSubject.value;
    };

    constructor(private _http : HttpClient){
        //de esta manera cuando se realiza el constructor se tomara del local storage el usuario en caso de que tenga alguna sesion iniciada
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("user")));

    }

    login(email : string , password : string): Observable<Response>{
        return this._http.post<Response>(this.url ,{email , password}, httpOption).
            pipe(map(res=>{
                if(res.success ===1){
                    const user : User = res.data;
                    localStorage.setItem("user",JSON.stringify(user));
                    this.userSubject.next(user);

                }
                return res;                                                                  
            
        }));
    }

    logOut(){
        //este metodo sera para cerrar sesión 
        //si se quiere hacer le log aunt se tiene que remover de donce esta guardado
        localStorage.removeItem("user");
        this.userSubject.next(null);
    }
}