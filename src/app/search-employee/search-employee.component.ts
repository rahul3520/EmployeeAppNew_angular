import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {


  empCode=""

  constructor(private api:ApiService){}

  searchData:any=[]

  readEmpCode=()=>
  {
    let data:any={"empCode":this.empCode}

    console.log(data)

    this.api.searchEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)

        if(response.length == 0)
        {
          alert("Invalid Employee code")
        }
        else
        {
          this.searchData=response
        }
      }
    )
  }

}
