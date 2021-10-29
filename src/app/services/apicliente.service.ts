

//la responsabilidad de este servicio es conectarse a los servicios de cliente
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//esta es la libreria del observable se utiliza tambien para programacion reactiva
import { Observable } from 'rxjs';
import { Response } from '../models/response';

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
}
