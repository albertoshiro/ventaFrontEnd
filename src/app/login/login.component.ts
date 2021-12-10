import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiAuthService } from "../services/apiAuth.service";

//nos dice que ese va a ser su html asociado
@Component({templateUrl : "login.component.html"})

export class LoginComponent  implements OnInit {
    
    public email :string ="";
    public password : string ="";
    
    //se injecta un objeto apiAuthService y un tipo Router para redirigir a otra paginas
    constructor(public apiAuth : ApiAuthService, private router : Router){

    }

    ngOnInit(){

    }

    login(){
        //trara la respuesta, en caso de ser exitosa nos redigira a el home 
       this.apiAuth.login(this.email,this.password).subscribe(response =>{
            //   console.log(response);
            if(response.success === 1){
                this.router.navigate(["/"]);

            }

       }) ;
       

    }

}