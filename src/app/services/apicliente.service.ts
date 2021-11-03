//la responsabilidad de este servicio es conectarse a los servicios de cliente
//los http headers definen como o que contendra el mensaje or lo general se envia un objeti json
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//esta es la libreria del observable se utiliza tambien para programacion reactiva
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import {Response} from '../models/response';
//pesto es la definicion d eun encabezado , en este podemos enviar que tipo de contenido, contenttype se mandara, en este caso es un objeto json
//como esta esto escrito 
const httpOption ={
  //este objeto nos da las opciones para enviar informacion a el WS
 headers : new HttpHeaders({
   'Contend-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {
  url : string = 'https://localhost:44396/api/Customer';
  constructor(
//esta clase servira para hacer solicitudes http post,put .. etc, y se puede inyectar desde su contructor la funcionalidad
  //como tal inyectamos esta modulo a la clase por el constructor , lo traemos de la raiz que es app.module  
  private _http : HttpClient

  ) { }


//es observable dado que se sutiliza cuando realizamos una solicitud a un servicio
  getCustomer(): Observable<Response> {
    return this._http.get<Response>(this.url);

  }
//nos regresara un response con las httpOptions 
  add(oCustomer : Customer) : Observable<Response>{
    return this._http.post<Response>(this.url,oCustomer,httpOption);
  }
}
