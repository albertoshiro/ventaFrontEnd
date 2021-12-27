import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Sale } from '../models/sale';

const httpOption ={
  //este objeto nos da las opciones para enviar informacion a el WS
 headers : new HttpHeaders({
   'Contend-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})



export class ApisaleService {
  url : string = 'https://localhost:44396/api/sale';
  constructor(
    private _http : HttpClient

  ) { }
  //al intentar agregar o realizar una solicitud add, resiviremos un objeto venta (ls forma base de nuestra peticion y resiviremos un tipo respuesta
  add(sale : Sale): Observable<Response>{
    //como tal en esta instrucción realizas la solicitud , del objeto http utilizamos post para enviarla, enviamos a una url, un objeto ti po venta con los encabezados y regresamos el resultado
    return this._http.post<Response>(this.url,sale,httpOption);
  }



}
