import { Component, OnInit } from '@angular/core';
import { Employees } from '../../models/employees.model';
import { EmployeeService } from '../../services/employee.service';



@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit { 

   
  employees:Employees[]; 
  employeeToDisplay:Employees[];
  search: string='';
 
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
this.employees = this._employeeService.getEmployees();
console.log(this._employeeService);
this.employeeToDisplay = this.employees;

  }
  
  
}
