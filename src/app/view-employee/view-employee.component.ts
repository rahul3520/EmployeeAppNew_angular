import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  constructor(private api:ApiService){

    api.viewEmployee().subscribe(

      (response)=>
      {
        this.employees=response
      }

    )

  }


  employees:any=[]

}
