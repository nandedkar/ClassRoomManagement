import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {BsDatepickerConfig}from 'ngx-bootstrap/datepicker';
import { Employees } from '../../models/employees.model';
import { Department } from '../../models/department.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('registrationForm') public createRegistrationForm:NgForm;

  datePickerConfig: Partial<BsDatepickerConfig>;

  departments:Department[] =
  [
    {id:1 , name:'Help Desk'},
    {id:2 , name:'HR'},
    {id:3 , name:'IT'},
    {id:4 , name:'Payroll'},
  ];

  employee:Employees =
  {
   id:0 ,
   name: '',
   gender: '',
   email:'',
   phoneNumbr: null,
   contactPreference: '',
   dateOfBirth: null,
   department: '',
   isActive: null,
   photoPath: 'assets/images/user.png'
  };  


  constructor(private _employeeService : EmployeeService, private _router:Router) { 
    this.datePickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue',
    showWeekNumbers:false,
    minDate: new Date(1900,0,1),
    maxDate: new Date(2021,11,31),
    dateInputFormat: 'DD/MM/YYYY'
  });
  }

  ngOnInit() {
   
  }

  saveEmployee():void{
    this._employeeService.save(this.employee);
    this._router.navigate(['home/records']);
    console.log(this.employee);
    
  }

  
}
