import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  students: any = [];
  ActualStudent: any = [];
  statusMessage: string = 'loading data Please Wait...';
  totalMarks: number;
  maxMarks: number = 0;
  locationOfTopper: number = 0;

  constructor(private _stuService: StudentService) { }

  ngOnInit() {
    this.ActualStudent = this._stuService.getEmployees().subscribe((studentsData) => { this.displaydata(studentsData); }
      , (error) => {
        this.statusMessage = 'Problem with the server please try later';
        console.error(error);
      });
  }
  displaydata(studentsData) {
    for (var i = 0; i < studentsData.length; i++) {
      this.totalMarks = studentsData[i].marks.English + studentsData[i].marks.Maths + studentsData[i].marks.Science;
      if (studentsData[i].marks.English < 20 || studentsData[i].marks.Maths < 20 || studentsData[i].marks.Science < 20) {
        studentsData[i].status = 'Fail';
        studentsData[i].color = 'red';
        studentsData[i].total = this.totalMarks;
        this.students.push(studentsData[i]);
      }
      else {
        studentsData[i].status = 'Pass';
        studentsData[i].total = this.totalMarks;
        this.students.push(studentsData[i]);
        if (this.totalMarks > this.maxMarks) {
          this.maxMarks = this.totalMarks;
          this.locationOfTopper = i;
        }
      }
    }
    this.students[this.locationOfTopper].status = 'Topper';
    this.students[this.locationOfTopper].color = 'green';
    this.students.sort(this.compare);
  }

  compare(a, b): number {
    if (a.name.toLowerCase() < b.name.toLowerCase())
      return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase())
      return 1;
    return 0;
  }


}
