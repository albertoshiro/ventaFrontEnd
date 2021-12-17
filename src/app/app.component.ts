
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/user';
import { ApiAuthService } from './services/apiAuth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  usuario : User;
  constructor(public apiAuthService :ApiAuthService,
              private router : Router
              ){
                
                this.apiAuthService.usuario.subscribe(res=>{
                  this.usuario = res;
                  console.log('cambio el objetos :  ' + res);
                });
                
  }
  
  logOut(){
    this.apiAuthService.logOut();
    this.router.navigate(['/login']);
  }
}
