import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiAuthService } from "../services/apiAuth.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
//nos dice que ese va a ser su html asociado
@Component({templateUrl : "login.component.html"})

export class LoginComponent  implements OnInit {
    
    public loginForm = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required]
    });

    
    //se injecta un objeto apiAuthService y un tipo Router para redirigir a otra paginas
    constructor(public apiAuthService : ApiAuthService, 
                private router : Router,
                private fb :FormBuilder){

                    //si ya tengo sesion ya no puedo entrar a login hasta cerrarla
                    if(this.apiAuthService.usuarioData)
                    {
                        this.router.navigate(['/']);
                    }

    }
    ngOnInit(){
    }
    login(){
        //trara la respuesta, en caso de ser exitosa nos redigira a el home 
       this.apiAuthService.login(this.loginForm.value).subscribe(response =>{
        console.log(this.loginForm.value)   
        // console.log(response);
           if(response.success === 1){
               this.router.navigate(['/']);
            }
       }) ;    
    }

}