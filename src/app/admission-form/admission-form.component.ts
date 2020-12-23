import { Component, OnInit } from '@angular/core';
import { IStudent } from '../model/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {
  student:IStudent={

    name :'',
    lastName :'',
    class :'',
    year: null,
    percentage: null

  };
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmitAdmission():void{
    this.router.navigate(['/student']);
  }

}
