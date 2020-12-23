import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class StudentService {
  constructor(private _http: Http) { }
  getEmployees(): Observable<any[]> {
    return this._http.get("http://localhost:4202/assets/studentData.json").map((response: Response) => <any[]>response.json())
      .catch(this.handleError);
  }
  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }

}
