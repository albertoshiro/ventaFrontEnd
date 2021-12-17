import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiAuthService } from "../services/apiAuth.service";

@Injectable()

export class JwtInterceptor implements HttpInterceptor{
    //recivimos inyectado el servicio api auth service, para ser utilizado

    constructor(private apiAuthService: ApiAuthService){
    }
    //resive solicitud y un httphandler 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
       //utilizamos un dato que se tiene en el objeto necesario para crearlo, un apiauthservice , el cual nos trae la informacion del usuario
       //en ese archivo creamos una pripiedad la cual extraia la informacion del usuario y o ponia en data
        const usuario = this.apiAuthService.usuarioData;
        //siempre que tengamos sesion el token se enviara en cada solicitud , en caso contrario se enviara tal cual
        if(usuario){
            request = request.clone({
                //estas agregando un hader, en ste caso de nombre authorization, se le agregara, la aplabra bearer y el token , que esta dado en el data
                setHeaders:{
                    //las variables se ponen entre llaves
                    Authorization: `Bearer ${usuario.token}`
                }
            })
            
        }
        return next.handle(request);
    }

}