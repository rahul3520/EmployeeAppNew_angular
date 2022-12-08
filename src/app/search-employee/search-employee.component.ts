import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {


  empCode=""

  constructor(private api:ApiService,private route:Router){}

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

  delbuttonClick=(id:any)=>
  {
    let data:any={"id":id}

    this.api.deleteEmployee(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status="success")
        {
          alert("successfully deleted!")
          this.route.navigate(["/search"])
        }
        else
        {
          alert("Something went wrong")
        }
      }
    )
  }

}
