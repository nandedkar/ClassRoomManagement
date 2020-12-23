import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import { StudentService } from './student/student.service';
import {RecordsComponent} from './components/records/records.component';
import {DisplayEmployeesComponent} from './components/displayEmployees/display-employees.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import {HomeComponent} from './components/home/home.component';
import { AppRoutingModule } from './app.routing';
import {EmployeeService}  from './services/employee.service';
import { EmployeeSearchPipe } from './customFilters/employeeSearch.pipe';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AdmissionFormComponent,
    RegistrationComponent,
    LoginComponent,
    RecordsComponent,
    ConfirmEqualValidatorDirective,
    DisplayEmployeesComponent,
    HomeComponent,
    EmployeeSearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
     FormsModule, 
     HttpModule,    
     BsDatepickerModule.forRoot(),
      
    

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
