import { Component, OnInit, Input } from '@angular/core';
import { Employees } from '../../models/employees.model';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {
@Input()
employee: Employees[];

@Input()
search : string='';
  constructor() { }

  ngOnInit() {
  }

}
