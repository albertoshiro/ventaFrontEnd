import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public lst :any ;
  constructor(
    //aqui estamos inyectando nuestro servicio dado que en su clase como tal esta un injectable
    private apiCliente : ApiclienteService

  ) { 
   
  }



  ngOnInit(): void {
  }

  getCustomer (){
    //desde aqui solicitamos una solicitud http get, utilizaremos el servicio para conectarnos y demas 
 
    this.apiCliente.getCustomer().subscribe(response => {
      this.lst =response.data;
      
    });
  }
}
