import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { request } from "http";
import { Observable } from "rxjs";
import { ApiAuthService } from "../services/apiAuth.service";

@Injectable()

export class JwtInterceptor implements HttpInterceptor{

    constructor(private apiAuthService: ApiAuthService){
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const usuario = this.apiAuthService.userData;
        if(usuario){
            request = request.clone({
                setHeaders:{
                    Authorization:'Bearer $(user.token)'
                }
            })
            
        }
        return next.handle(request);
    }

}