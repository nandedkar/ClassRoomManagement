import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {RecordsComponent} from './components/records/records.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
   { path: 'student', component: StudentComponent },
   { path: 'home', component: HomeComponent ,
   children: [
    {
      path: 'records', // child route path
      component: RecordsComponent // child route component that the router renders
    },
    {
      path: '', // child route path
      component: RecordsComponent // child route component that the router renders
    }
  ] },
  { path: 'addmissionForm', component: AdmissionFormComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes ,{useHash: false}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}