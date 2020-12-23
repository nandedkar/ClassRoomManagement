import { Injectable } from "@angular/core";
import { Employees } from "../models/employees.model";

@Injectable()
export class EmployeeService{
private listEmployees: Employees[]=[
    {
        id: 1,
        name: 'Manoj Ucchekar',
        gender: 'male',
        email:'sunny@getMaxListeners.com',
        phoneNumbr: 8959261616,
        contactPreference: 'ram',
        dateOfBirth: new Date(10/12/1994),
        department: '1',
        isActive: true,
        photoPath: 'assets/images/user.png'
      
      },
      {
        id: 2,
        name: 'mark',
        gender: 'male',
        email:'sunny@getMaxListeners.com',
        phoneNumbr: 8959261616,
        contactPreference: 'ram',
        dateOfBirth: new Date(10/12/1994),
        department: '2',
        isActive: true,
        photoPath: 'assets/images/user.png'
      
      },
      {
        id: 3,
        name: 'jain',
        gender: 'female',
        email:'sunny@getMaxListeners.com',
        phoneNumbr: 8959261616,
        contactPreference: 'ram',
        dateOfBirth: new Date(10/12/1994),
        department: '3',
        isActive: true,
        photoPath: 'assets/images/user.png'
      
      },
      {
        id: 4,
        name: 'sunny',
        gender: 'male',
        email:'sunny@getMaxListeners.com',
        phoneNumbr: 8959261616,
        contactPreference: 'ram',
        dateOfBirth: new Date(10/12/1994),
        department: '1',
        isActive: true,
        photoPath: 'assets/images/user.png'
      
      },
      {
        id: 5,
        name: 'mark',
        gender: 'male',
        email:'sunny@getMaxListeners.com',
        phoneNumbr: 8959261616,
        contactPreference: 'ram',
        dateOfBirth: new Date(10/12/1994),
        department: '2',
        isActive: true,
        photoPath: 'assets/images/user.png'
      
      },
      {
        id: 6,
        name: 'jain',
        gender: 'female',
        email:'sunny@getMaxListeners.com',
        phoneNumbr: 8959261616,
        contactPreference: 'ram',
        dateOfBirth: new Date(10/12/1994),
        department: '3',
        isActive: true,
        photoPath: 'assets/images/user.png'
      
      },
      {
        id: 7,
        name: 'Kamla',
        gender: 'Female',
        email:'sunny@getMaxListeners.com',
        phoneNumbr: 8959261616,
        contactPreference: 'ram',
        dateOfBirth: new Date(10/12/1994),
        department: '1',
        isActive: true,
        photoPath: 'assets/images/user.png'
      
      }
    
      
];
getEmployees():Employees[]{
    return this.listEmployees;
}
save(employee: Employees){
this.listEmployees.push(employee);
}
}